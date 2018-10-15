<?php
namespace app;
class Post{
    public function getPosts($session){
        if (!$session->has('items')){
            $this->createDummyData($session);
        }
    return $session->get('items');
    }

    private function createDummyData($session){
        $items = [
            [
                'title' => 'Nike Shoes',
            'content' => 'Navy blue size 7-13 mens or 5-11 womens',
            'price' => 'Price: 99.99'
            ],
            [
                'title' => 'Apple laptop',
                'content' => '17 in high speed laptop grey',
                'price' => '1200'
            ]
        ];
        $session->put('items', $items);
    }

    public function getPost($session, $id){
        if(!$session->has('items')){
            $this->createDummyData();
        }
        return $session->get('items')[$id];
    }

    public function addPost($session, $title, $content){
        if(!$session->has('items')){
            $this->createDummyData();
        }
        $items = $session->get('items');
        array_push($items, ['title' => $title, 'content' => $content]);
        $session->put('items', $items);
    }

    public function editPost($session, $id, $title, $content){

        $items = $session->get('items');
        $items[$id] = ['title' => $title, 'content' => $content];
        $session->put('items', $items);
    }


}