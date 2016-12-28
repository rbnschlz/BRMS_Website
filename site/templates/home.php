<?php snippet('header') ?>
<div class="navigation_wrapper <?php if($page->typecolor() == "black") { echo "blacktype"; } ?>">
	<a class="navigation_top" href="#top"><?php echo $site->title() ?></a>
	<a class="navigation_projects" href="#projects">Projects</a>
	<a class="navigation_info" href="#info">Info</a>
</div>


<!-- Image -->
<section class="home_section home_section_landing" id="top">
	<div class="home_image" style="background-image: url(<?php echo $page->images()->first()->resize(2000, 1500, 80)->url() ?>)"></div>
</section>


<!-- Info -->
<section class="home_section home_section_info" id="info">
	<div class="home_info_left">
		<div class="home_info_text"><?php echo $infotext ?></div>
		<div class="home_info_bottoms">
			<div class="home_info_email">
				<h2>EMAIL</h2>
				<span><?php echo $email ?></span>
			</div>
			<div class="home_info_adresses">
				<?php foreach(page("studio")->addresses()->toStructure() as $adress): ?>
					<div class="home_info_adresses_block">
						<h2><?php echo $adress->countrycode(); ?></h2>
						<span><?php echo $adress->street(); ?>,</span>
						<span><?php echo $adress->zip(); echo " "; echo $adress->city(); echo " — "; echo $adress->country(); ?></span>
						<span><?php echo $adress->phone(); ?></span>
					</div>
				<?php endforeach ?>
			</div>
		</div>
	</div>
	<div class="home_info_right">
		<div class="home_info_clients">
			<h2>CLIENTS</h2>
			<?php 
			$i = 0;
			foreach(page("studio")->clients()->toStructure() as $client) {
				$i++;
				$block = "<span>";
				$block .= $client;
				$block .= $i == page("studio")->clients()->toStructure()->count() ? "" : ", ";
				$block .= "</span>";

				echo $block;
			} ?>
		</div>
		<div class="home_info_awards">
			<h2>AWARDS & EXHIBITIONS</h2>
			<?php 
			$i = 0;
			foreach(page("studio")->awards()->toStructure() as $award) {
				$i++;
				$block = "<li>";
				$block .= $award->year().", ".$award->entry();
				$block .= "</li>";

				echo $block;
			} ?>
		</div>
		<ol class="home_info_credit">
			<li><span class="tinyheadline">Cover picture: </span> <?php echo $page->images()->first()->caption() ?></li>
			<li><span class="tinyheadline">Typeface: </span> Basel Grotesk by Chi Long Trieu</li>
		</ol>
	</div>
</section>

<!-- Projects -->
<?php snippet('projects') ?>

<?php snippet('footer') ?>