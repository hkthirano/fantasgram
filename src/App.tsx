import AppHeader from './components/AppHeader';
import ImageCardList from './components/ImageCardList';

function App() {
  const images = [
    {
      imageUrl: "https://fantasgramdata.z11.web.core.windows.net/salt_macro.jpg",
      imageName: "塩",
      createdDate: "2024/5/9"
    },
    {
      imageUrl: "https://fantasgramdata.z11.web.core.windows.net/salt_micro.jpg",
      imageName: "塩",
      createdDate: "2024/5/9"
    }
  ]

  return (
    <div>
      <AppHeader />

      <div className="h-screen w-screen flex justify-center py-2">
        <ImageCardList images={images} />
      </div>
    </div>
  );
}

export default App;
