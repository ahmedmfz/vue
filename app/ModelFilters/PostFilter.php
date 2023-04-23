<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class PostFilter extends ModelFilter
{
    public function title($title){
        return $this->where('title', 'like' ,'%'. $title . '%');
    }
    public function category($category){
        return $this->where('category_id',$category);
    }
}
