import {Review} from "@/types/review";


type Props = {
  reviews: Review[];
};


const ReviewList = ({ reviews }: Props) => {
  return (
    <div>
      <h1 className="text-lg mb-4 text-white text-left">Reseñas:</h1>

      {reviews.length === 0 ? (
        <p className="ml-3 text-gray-400">No hay reseñas disponibles.</p> //Esto es por si el libro no tiene reseñas
      ) : (
        <ul className="list-disc pl-6 marker:text-2xl">
        {reviews.map((review) => (
          <li key={review.id} className="mb-1 pl-2">
            <p className="text-white">{review.description}</p>
          </li>
        ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;