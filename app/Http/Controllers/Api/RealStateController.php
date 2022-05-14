<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RealState;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class RealStateController extends Controller
{
    private $realState;

    public function __construct(RealState $realState)
    {
        $this->realState = $realState;
    }

    public function index()
    {
        $realState = $this->realState->paginate('10');

        return response()->json($realState, 200);
    }

    public function show($id)
    {
        try {
            $realState = $this->realState->findOrFail($id);

            return response()->json($realState, 200);

        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 401);
        }
    }

    public function store(Request $request)
    {
        $data = $request->all();
        try {
            $realState = $this->realState->create($data); //Mass Asignment

            return response()->json('Imóvel cadastrado com sucesso', 200);

        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 401);
        }
    }

    public function update($id, Request $request)
    {
        $data = $request->all();
        try {
            $realState = $this->realState->findOrFail($id);
            $realState->update($data);

            return response()->json('Imóvel atualizado com sucesso', 200);

        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 401);
        }
    }

    public function destroy($id)
    {
        try {
            $realState = $this->realState->findOrFail($id);
            $realState->delete();

            return response()->json('Imóvel removido com sucesso', 200);

        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 401);
        }
    }
}
