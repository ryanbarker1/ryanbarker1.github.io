<?php $__env->startSection('content'); ?>


    <div class="row">
        <div class="col-md-12">
            <form action="<?php echo e(route('admin.create')); ?>" method="post">
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
                <?php echo e(csrf_field()); ?>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), array('__data', '__path')))->render(); ?>