<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Session\Store;

class PostController extends Controller
{
    public function getIndex(Store $session){
        $item = new Post();
        $items = $item->getPosts($session);
        return view('shop.index', ['items' => $items]);
    }

    public function getAdminIndex(Store $session){
        $item = new Post();
        $items = $item->getPosts($session);
        return view('admin.index', ['items' => $items]);
    }

    public function getPost(Store $session, $id){
        $item = new Post();
        $item = $item->getPost($session, $id);
        return view('shop.item', ['item' => $item]);
    }

    public function getAdminCreate(){
        return view('admin.create');
    }

    public function getAdminEdit(Store $session, $id){
        $item = new Post();
        $item = $item->getPost($session, $id);
        return view('admin.edit', ['item' => $item, 'itemId' => $id]);
    }

    public function postAdminCreate(Store $session, Request $request){
        $this->validate($request, [
            'title' => 'required|min:5',
            'content' => 'required|min:10',
            'price' => 'required|min10'
        ]);
        $item = new Post();
        $item->addPost($session, $request->input('title'), $request->input('content'));
        return redirect()->route('admin.index')->with('info', 'Post created, Title is: ' . $request->input('title'));
    }

    public function postAdminUpdate(Store $session, Request $request){
        $this->validate($request, [
            'title' => 'required|min:5',
            'content' => 'required|min:10',
            'price' => 'required|min10'
        ]);
        $item = new Post();
        $item->addPost($session, $request->input('id'), $request->input('title'), $request->input('content'));
        return redirect()->route('admin.index')->with('info', 'Post created, new Title is: ' . $request->input('title'));
    }


}
