<main id="main-container">
    <div class="content bg-gray-lighter">
        <div class="row items-push">
            <div class="col-sm-7">
                <h1 class="page-heading"> Modules </h1>
            </div>
            <div class="col-sm-5 text-right hidden-xs">
                <ol class="breadcrumb push-10-t">
                    <li>Dashboard</li>
                    <li>Settings</li>
                    <li><a class="link-effect" href="<?php echo base_url('settings/modules'); ?>">Modules</a></li>
                </ol>
            </div>
        </div>
    </div>
    <div class="content content-narrow">
        <div class="block">
            <div class="block-header">
                <h3 class="block-title">
                	Modules
                    <a href="javascript:;" class="btn btn-primary btn-sm pull-right pop" pageTitle="Add Module" pageName="<?php echo base_url('settings/modules/manage'); ?>">
                        <i class="fa fa-plus-circle"></i> Add
                    </a>
                </h3>
            </div>
            <div class="block-content">
                <div class="">
                    <table id="dtable" class="table table-striped table-bordered responsive small">
                        <thead>
                            <tr>
                                <th>Module</th>
                                <th width="120px"></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</main>
