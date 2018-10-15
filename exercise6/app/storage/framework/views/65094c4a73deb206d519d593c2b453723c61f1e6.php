<?php $__env->startSection('content'); ?>
    <?php if(Session::has('info')): ?>
        <div class="row">
            <div class="col-md-12">
                <p class="alert alert-info"><?php echo e(Session::get('info')); ?></p>
            </div>
        </div>
    <?php endif; ?>
    <div class="row">
        <div class="col-md-12">
            <a href="<?php echo e(route('admin.create')); ?>">New Post</a>
        </div>
    </div>
    <hr>
    <?php $__currentLoopData = $items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="row">
        <div class="col-md-12">
            <p><strong><?php echo e($item['title']); ?></strong> <a href="<?php echo e(route('admin.edit', ['id' => array_search($item, $items)])); ?>">Edit</a></p>
        </div>
    </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), array('__data', '__path')))->render(); ?>