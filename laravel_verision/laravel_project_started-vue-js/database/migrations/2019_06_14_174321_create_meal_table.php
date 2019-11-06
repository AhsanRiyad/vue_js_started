<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMealTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meal', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            //$table->bigInteger('user_id');
            $table->bigInteger('added_by');
            $table->double('ataur_count', 8, 2);
            $table->double('riyad_count', 8, 2);
            $table->string('ataur_comment');
            $table->string('riyad_comment');
            $table->date('date');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meal');
    }
}
