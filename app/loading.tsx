export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-t-2 border-primary-blue rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-t-2 border-primary-green rounded-full animate-spin direction-reverse opacity-70"></div>
        <div className="absolute inset-4 border-t-2 border-white rounded-full animate-spin opacity-30"></div>
      </div>
      <h2 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green animate-pulse">
        Loading Parsuram Naik
      </h2>
    </div>
  );
}
