export default function VideoSection() {
  return (
    <section id="video" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Watch Our Featured Clip
        </h2>

        <div className="w-full h-[350px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
          <video
            src="/videos/featured.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
