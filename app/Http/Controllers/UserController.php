<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function user()
    {
        return User::all();
    }

    public function userId(Request $request){
        return User::where('id', $request->input('id'))->get();
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)

    {
        User::create($request->all());
        return User::where('email', $request->input('email'))->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        User::where('id', $request->input('id'))->update($request->all());
        return User::where('id', $request->input('id'))->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
