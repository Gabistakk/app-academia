<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('email')->unique();
            $table->string('senha');
            $table->string('exercicio1')->nullable();
            $table->string('exercicio2')->nullable();
            $table->string('exercicio3')->nullable();
            $table->string('exercicio4')->nullable();
            $table->string('exercicio5')->nullable();
            $table->string('cafeDaManha')->nullable();
            $table->string('almoco')->nullable();
            $table->string('cafeDaTarde')->nullable();
            $table->string('janta')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
