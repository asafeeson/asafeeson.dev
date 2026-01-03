<script lang="ts">
	interface Props {
		onSelect?: () => void;
	}

	let { onSelect }: Props = $props();

	function handleSelect() {
		onSelect?.();
	}
</script>

<ul class="flex flex-col items-center lg:items-end gap-10 lg:flex-row">
	<li>
		<a href="#aboutme" class="menu__item" onclick={handleSelect}>ABOUT me</a>
	</li>
	<li>
		<a href="#whatido" class="menu__item" onclick={handleSelect}>WHAT I do</a>
	</li>
	<li>
		<a href="#howido" class="menu__item" onclick={handleSelect}>HOW I do</a>
	</li>
	<li>
		<a href="#services" class="menu__item" onclick={handleSelect}>my SERVICES</a>
	</li>
	<li>
		<a href="#contact" class="menu__item" onclick={handleSelect}>CONTACT me</a>
	</li>
</ul>
