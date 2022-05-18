<?php

namespace App\Http\Controllers\Api;

use App\Api\ApiMessages;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = $this->user->paginate('10');

        return response()->json($user, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!$request->has('password') || !$request->get('password')){
            $message = new ApiMessages('É necessário informar uma senha para o usuário...');
            return response()->json($message->getMessage(), 401);
        }

        $data = $request->all();
        try {
            $data['password'] = bcrypt('password');
            $user = $this->user->create($data);

            return response()->json('Usuário cadastrado com sucesso', 200);

        } catch (\Exception $error) {
            $message = new ApiMessages($error->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $user = $this->user->findOrFail($id);

            return response()->json($user, 200);

        } catch (\Exception $error) {
            $message = new ApiMessages($error->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        if(!$request->has('password') && !$request->get('password')){
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        try {
            $user = $this->user->findOrFail($id);
            $user->update($data);

            return response()->json('Usuário atualizado com sucesso', 200);

        } catch (\Exception $error) {
            $message = new ApiMessages($error->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = $this->user->findOrFail($id);
            $user->delete();

            return response()->json('Usuário removido com sucesso', 200);

        } catch (\Exception $error) {
            $message = new ApiMessages($error->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }
}
