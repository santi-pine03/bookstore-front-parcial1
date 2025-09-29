import { prize } from "@/types/prize";
import { Organization } from "@/types/organization";

type Props = {
  prize: Omit<prize, "id">;
  Organization: Omit<Organization, "id">;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
};

const PrizeForm = ({ prize, onChange, Organization }: Props) => {
  return (
    <div className="space-y-4 bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-md">

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

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre de la organizacion 
        </label>
        <input
          id="name"
          name="name"
          value={Organization.name}
          onChange={onChange}
          required
          data-scope="organization"
          placeholder = "No puede ser una organizacion ya usada"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
            htmlFor="TIPO_ORGANIZACION"
            className="block text-sm font-medium text-gray-700">
            Tipo de Organización
        </label>
        <select
            id="TIPO_ORGANIZACION"
            name="TIPO_ORGANIZACION"
            value={Organization.TIPO_ORGANIZACION}
            onChange={onChange}
            required
            data-scope="organization"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Selecciona una opción</option>
            <option value="publica">PUBLICA</option>
            <option value="privada">PRIVADA</option>
            <option value="ong">FUNDACION</option>
        </select>
        </div>

    </div>
  );
};

export default PrizeForm;