<?php

namespace App\Http\Controllers\Api;

use App\Api\ApiMessages;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $data = $request->all();

        if (!$request->has('password') || !$request->get('password')) {
            $message = new ApiMessages('É necessário informar uma senha para o usuário...');
            return response()->json($message->getMessage(), 401);
        }

        Validator::make($data, [
            'phone' => 'required',
            'mobile_phone' => 'required'
        ])->validate();

        try {
            $data['password'] = bcrypt('password');

            $user = $this->user->create($data);
            $user->profile()->create(
                [
                    'phone' => $data['phone'],
                    'mobile_phone' => $data['mobile_phone'],
                ]
            );

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
            //buscar pelo ID o user com o profile -> user with('profile)
            $user = $this->user->with('profile')->findOrFail($id);
            $user->profile->social_networks = unserialize($user->profile->social_networks);

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

        if (!$request->has('password') && !$request->get('password')) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        Validator::make($data, [
            'profile.phone' => 'required',
            'profile.mobile_phone' => 'required'
        ])->validate();

        try {
            $profile = $data['profile'];
            $profile['social_networks'] = serialize($profile['social_networks']);

            $user = $this->user->findOrFail($id);
            $user->update($data);

            $user->profile()->update($profile);

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
