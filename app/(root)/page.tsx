import { auth } from "@/auth";
import SearchForm from "../../components/SearchForm";
import { Star } from "lucide-react";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'JohnDoe' },
      _id: 1,
      description: "This is a description",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsemcore.pl%2Fslownik%2Fgoogle%2F&psig=AOvVaw2U3ocdGgxFiWfnfm_HHU_T&ust=1735051892733000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODtoY-SvooDFQAAAAAdAAAAABAE",
      category: "Tech",
      title: "Startup robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your StartUp!</h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas</p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All StartUps"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startup found!</p>
          )}
        </ul>
      </section>
    </>
  );
}
