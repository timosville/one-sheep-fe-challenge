<template>
  <div class="bg-one-yellow max-h-screen container-grid">
    <div class="container-grid__hero">
      <img
        class="object-contain w-full"
        src="/hero/photos-and-media.svg"
        alt="media"
      />
    </div>
    <div class="container-grid__video">
      <video controls>
        <source
          src="https://res.cloudinary.com/kiekies/video/upload/v1629289654/mm3gvs6wmsg3zebylcqz.mp4"
          type="video/mp4"
          poster="/screenshots/video.svg"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
};
</script>