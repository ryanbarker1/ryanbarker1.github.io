<?php $__env->startSection('content'); ?>

    <?php $__currentLoopData = $items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="row">
        <div class="col-md-12 text-center">
            <h1 class="post-title"><?php echo e($item['title']); ?></h1>
            <p><?php echo e($item['content']); ?></p>
            <p><a href="<?php echo e(route('shop.item', ['id' => array_search($item, $items)])); ?>">Read more...</a></p>
        </div>
    </div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), array('__data', '__path')))->render(); ?>