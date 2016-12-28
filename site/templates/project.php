<?php snippet('header') ?>
<div class="project_navigation_wrapper">
	<a class="navigation_top" href="<?php echo $site->url() ?>"><?php echo $site->title() ?></a>
	<a class="navigation_projects" href="#projects">Projects</a>
	<a class="navigation_info" href="<?php echo $site->url() ?>#info">Info</a>
</div>

<!-- Project -->
<section class="project_section project_section_images">
	<div class="project_title"><?php echo $page->title() ?></div>
	<?php 
	$n = 0;
	foreach($page->images()->sortBy('sort', 'asc')->offset(1) as $image) {
		$n++;
		$block = "<div class='project_image_block";
		$block .= $image->sizing() == "small" ? " small" : " big";
		$block .= "'>";
		$block .= "<img src='".$image->resize(2000, 1500, 80)->url()."' class='zoomable ";
		$block .= $image->orientation() == "landscape" ? "project_landscape" : "project_portrait";
		$block .= "'></img>";
		// $block .= $image->caption()->isNotEmpty() ? $image->caption()->kirbytext() : "";
		$block .= $image->insert()->isNotEmpty() ? $image->insert()->kirbytext() : "";
		$block .= "</div>";

		echo $block;
	
	} ?>

</section>

<div class="project_overlay_wrapper">
	<div class="overlay_slide">
		<?php foreach($page->images()->sortBy('sort', 'asc')->offset(1) as $image): ?>
			<div class="overlay_slide_s">
				<div class="overlay_slide_s_img" data-style="background-image: url('<?php echo $image->resize(2000, 1500, 80)->url() ?>')"></div>
			</div>
		<?php endforeach ?>
	</div>
	<span class="project_overlay_close">&#215;</span>
	<span class="project_overlay_title"><?php echo $page->title() ?></span>
	<span class="project_overlay_title"><?php echo $page->title() ?></span>
	<div class="project_overlay_count" id="caption"></div>

</div>


<!-- Projects -->
<?php snippet('projects') ?>

<?php snippet('footer') ?>