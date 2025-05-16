import CustomImage from "@/components/Image/custom-image";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <CustomImage
        className="w-[250px] h-[300px]"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80"
        alt="random image"
      />
    </main>
  );
}
