<?php $__env->startSection('content'); ?>
    <div class="row">
        <div class="col-md-12">
            <p class="quote"><?php echo e($item['title']); ?></p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p><?php echo e($item['content']); ?></p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p><?php echo e($item['price']); ?></p>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), array('__data', '__path')))->render(); ?>