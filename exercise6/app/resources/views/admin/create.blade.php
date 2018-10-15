@extends('layouts.admin')

@section('content')


    <div class="row">
        <div class="col-md-12">
            <form action="{{route('admin.create')}}" method="post">
                <div class="form-group">
                    <label for="title">Item</label>
                    <input type="text" class="form-control" id="title" name="title">
                </div>
                <div class="form-group">
                    <label for="content">Description</label>
                    <input type="text" class="form-control" id="content" name="content">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" class="form-control" id="price" name="price">
                </div>
                {{csrf_field()}}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
@endsection