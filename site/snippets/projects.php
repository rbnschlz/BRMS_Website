<section class="home_section home_section_projects" id="projects">
	<div class="home_projects_wrapper">
		<?php 
		$n = 0;
		foreach(page("projects")->children()->visible() as $project) {
			$n++;
			$block = "<div class='home_projects_block'>";
			$block .= "<div class='home_projects_block_inner";
			$block .= $n%2 == 1 ? " odd" : " even";
			$block .= "'>";
			$block .= "<a href='".$project->url()."' class='";
			$block .= $project->images()->sortBy('sort', 'asc')->first()->orientation() == "landscape" ? "landscape" : "portrait";
			$block .= $project->sizing() == "big" ? " projects_big" : " projects_small";
			$block .= "'><img src='".$project->images()->sortBy('sort', 'asc')->first()->resize(2000, 1500, 80)->url()."'></img>";
			$block .= "<span>{$project->title()}</span>";
			$block .= "</a>";
			$block .= "</div>";
			$block .= "</div>";

			echo $block;
		
		} ?>
	</div>
</section>