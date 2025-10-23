<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
</script>

<template>
	<main class="flex min-h-dvh items-center justify-center pt-16 md:pb-16 md:pt-0">
		<div class="inner relative px-4 md:px-8">
			<div class="mx-auto max-w-3xl space-y-4 text-center md:space-y-6">
				<h1 class="text-4xl sm:text-5xl lg:text-7xl text-nord6">
					Sistem informasi pengelolaan data Desa
				</h1>

				<p class="mx-auto max-w-lg lg:text-2xl text-nord4">
					Masuk & lakukan pendataan
				</p>

				<Button
					class="w-fit rounded-lg bg-primary p-1"
					size="wrapper"
				>
					<span class="inline-flex items-center gap-2 rounded-md bg-primary-layer px-4 py-1.5">
						<ChevronRight class="size-4 bg-primary rounded-full text-nord6" />
						Onboarding
					</span>
				</Button>
			</div>
		</div>
	</main>
</template>
