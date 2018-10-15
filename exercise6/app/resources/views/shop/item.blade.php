@extends('layouts.master')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <p class="quote">{{$item['title']}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p>{{$item['content']}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p>{{$item['price']}}</p>
        </div>
    </div>
@endsection