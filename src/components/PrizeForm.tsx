import { prize } from "@/types/prize";

type Props = {
  prize: Omit<prize, "id">;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const PrizeForm = ({ prize, onChange }: Props) => {
  return (
    <div className="space-y-4 bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-md">
      {/* Nombre del premio */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre del Premio
        </label>
        <input
          id="name"
          name="name"
          value={prize.name}
          onChange={onChange}
          required
          placeholder="Ej: Premio Nobel"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Fecha de premiación */}
      <div>
        <label htmlFor="premiationDate" className="block text-sm font-medium text-gray-700">
          Fecha de Premiación
        </label>
        <input
          id="premiationDate"
          name="premiationDate"
          type="date"
          value={prize.premiationDate}
          onChange={onChange}
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Organización */}
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
          Organización
        </label>
        <input
          id="organization"
          name="organization"
          value={prize.organization}
          onChange={onChange}
          required
          placeholder="Ej: Academia Sueca"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Descripción */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={prize.description}
          onChange={onChange}
          required
          rows={6}
          placeholder="Breve descripción del premio…"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default PrizeForm;