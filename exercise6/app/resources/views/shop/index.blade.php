@extends('layouts.master')

@section('content')

    @foreach($items as $item)
    <div class="row">
        <div class="col-md-12 text-center">
            <h1 class="post-title">{{$item['title']}}</h1>
            <p>{{$item['content']}}</p>
            <p><a href="{{route('shop.item', ['id' => array_search($item, $items)])}}">Read more...</a></p>
        </div>
    </div>
@endforeach
@endsection