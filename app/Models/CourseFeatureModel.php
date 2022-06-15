<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseFeatureModel extends Model
{
    use HasFactory;

    public $incrementing = true;
    public $keyType = 'int';
    public $timestamps = false;
    protected $table = 'course_feature';
    protected $primaryKey = 'id';

}
