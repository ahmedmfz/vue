<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'       => $this->faker->text('20'),
            'content'     => $this->faker->text('40'),
            'category_id' => rand(1,Category::count()),
            'image'       => 'https://recurpost.com/wp-content/uploads/2021/02/Google-My-Business-Post-Image-Size-in-2021.jpg',
        ];
    }
}
