<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class CategoryFilter extends ModelFilter
{
    public function title($title){
        return $this->where('name', 'like' ,'%'. $title . '%');
    }
}
