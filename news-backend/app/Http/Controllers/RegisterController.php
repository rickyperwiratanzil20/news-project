<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Validasi data input

        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        // Simpan data ke database atau lakukan tindakan lainnya

        // Kembalikan respon JSON

        return response()->json(['message' => 'Registration successful']);
    }
}
