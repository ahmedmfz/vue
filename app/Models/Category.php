<?php

namespace App\Models;

use App\ModelFilters\CategoryFilter;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory ,Filterable;
    protected $guarded = [];
    public function modelFilter()
    {
        return $this->provideFilter(CategoryFilter::class);
    }
}
