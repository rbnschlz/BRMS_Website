<?php snippet('header') ?>
<div class="project_navigation_wrapper">
	<a class="navigation_top" href="<?php echo $site->url() ?>"><?php echo $site->title() ?></a>
	<a class="navigation_projects" href="<?php echo $site->url() ?>#projects">Projects</a>
	<a class="navigation_info" href="<?php echo $site->url() ?>#info">Info</a>
</div>

<!-- Project -->
<section class="project_section project_section_images">
	<div class="project_title"><?php echo $page->title() ?></div>
	<?php 
	$n = 0;
	foreach($page->images() as $image) {
		$n++;
		$block = "<div class='project_image_block'>";
		$block .= "<img src='".$image->url()."' class='";
		$block .= $image->orientation() == "landscape" ? "project_landscape" : "project_portrait";
		$block .= "'></img>";
		$block .= "</div>";

		echo $block;
	
	} ?>

</section>


<!-- Projects -->
<?php snippet('projects') ?>

<?php snippet('footer') ?>