export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-8 h-8">
      <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
    </div>
  );
}
