<script src="<?php echo base_url(); ?>assets/js/main.min-2.2.js"></script>
<script src="<?php echo base_url(); ?>assets/js/plugins/jquery-validation/jquery.validate.min.js"></script> 
<script src="<?php echo base_url(); ?>assets/js/toastr.js"></script>

<?php if($page_active == 'login'){ ?>
<script src="<?php echo base_url(); ?>assets/js/pages/base_pages_login.js"></script>
<?php } ?>

<?php if($page_active == 'forgot'){ ?>
<script src="<?php echo base_url(); ?>assets/js/pages/base_pages_reminder.js"></script>
<?php } ?>

<script src="<?php echo base_url(); ?>assets/js/jsform.js"></script>

</body>
</html>