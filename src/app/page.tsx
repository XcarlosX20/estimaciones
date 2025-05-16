import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-black">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <section id="introduccion" className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">La Magia de la Estimación Estadística</h2>
            <p className="text-lg leading-relaxed mb-4">
                En el vasto mundo de la estadística, a menudo nos encontramos con situaciones donde es imposible estudiar a cada miembro de una población completa. Imagina que quieres saber la altura promedio de todos los hombres en Venezuela, o la esperanza de vida de un nuevo modelo de bombilla. ¡Sería una tarea monumental!
            </p>
            <p className="text-lg leading-relaxed">
                Aquí es donde entra en juego la estimación. En lugar de observar a toda la población, tomamos una pequeña porción representativa, llamada muestra, y usamos la información de esa muestra para hacer una &quot;conjetura educada&quot; sobre las características de la población total. Existen dos enfoques principales para hacer estas conjeturas: la estimación puntual y la estimación por intervalo.
            </p>
        </section>

        ---

        <section id="estimacion-puntual" className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Estimación Puntual: Un Único Valor para Representar la Verdad</h2>
            <p className="text-lg leading-relaxed mb-4">
                La estimación puntual es el enfoque más directo y simple. Consiste en utilizar un único valor obtenido de nuestra muestra para estimar un parámetro desconocido de la población. Piensa en ella como tu &quot;mejor adivinanza&quot; sobre ese valor real.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 text-gray-800 p-4 mb-6" role="alert">
                <p className="font-bold">¿Cómo funciona?</p>
                <p>Calculamos una estadística de nuestra muestra (por ejemplo, el promedio de una muestra de alturas, o la proporción de éxito en una muestra de pruebas) y usamos ese número directamente como nuestra estimación para el parámetro de la población.</p>
            </div>

            <h3 className="text-2xl font-medium mb-3">Ejemplo Práctico:</h3>
            <p className="text-lg leading-relaxed mb-4">
                Supongamos que una empresa de software lanza una nueva actualización y quiere estimar el tiempo promedio que tarda un usuario en descargarla. No pueden medir a todos los millones de usuarios, así que seleccionan una muestra aleatoria de 100 usuarios y registran su tiempo de descarga.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Si el tiempo promedio de descarga en esa muestra de 100 usuarios es de 7.5 segundos, entonces la estimación puntual del tiempo promedio de descarga para todos los usuarios de la población sería 7.5 segundos.
            </p>
            <h3 className="text-2xl font-medium mb-3">Ventajas:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 text-lg">
                <li><strong className="font-bold">Simple y fácil de entender:</strong> Ofrece un número concreto.</li>
                <li><strong className="font-bold">Directa:</strong> Requiere solo un cálculo.</li>
            </ul>
            <h3 className="text-2xl font-medium mb-3">Desventajas:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong className="font-bold">Falta de precisión:</strong> No nos dice qué tan cerca creemos que está nuestra estimación del valor real de la población. No hay margen de error.</li>
                <li><strong className="font-bold">No considera la variabilidad de la muestra:</strong> Cada muestra es diferente, y 7.5 segundos de una muestra podría ser 7.8 de otra. La estimación puntual ignora esta incertidumbre.</li>
            </ul>
        </section>

        ---

        <section id="estimacion-por-intervalo" className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Estimación por Intervalo: Un Rango de Posibilidades con Confianza</h2>
            <p className="text-lg leading-relaxed mb-4">
                A diferencia de la estimación puntual, la estimación por intervalo no nos da un único número, sino un rango de valores dentro del cual esperamos que se encuentre el parámetro real de la población. Lo más importante es que esta estimación viene acompañada de un nivel de confianza.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 text-gray-800 p-4 mb-6" role="alert">
                <p className="font-bold">¿Cómo funciona?</p>
                <p>Calculamos un <strong className="font-bold">intervalo de confianza</strong>, que es un rango de valores (por ejemplo, [6.8 segundos, 8.2 segundos]). A este intervalo le asociamos un <strong className="font-bold">nivel de confianza</strong> (por ejemplo, 95% de confianza), que nos dice la probabilidad de que este intervalo contenga el verdadero parámetro de la población si repitiéramos el muestreo muchas veces.</p>
            </div>

            <h3 className="text-2xl font-medium mb-3">Ejemplo Práctico (Continuación):</h3>
            <p className="text-lg leading-relaxed mb-4">
                Volviendo al ejemplo de la descarga del software. Usando la misma muestra de 100 usuarios y su tiempo promedio de 7.5 segundos, podríamos construir un intervalo de confianza del 95%.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                El resultado podría ser: &quot;Con un 95% de confianza, el tiempo promedio de descarga para todos los usuarios de la población se encuentra entre 7.1 segundos y 7.9 segundos.&quot;
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Esto es mucho más informativo, ya que nos da una idea del margen de error y la fiabilidad de nuestra estimación.
            </p>
            <h3 className="text-2xl font-medium mb-3">Ventajas:</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 text-lg">
                <li><strong className="font-bold">Proporciona precisión:</strong> Nos da un rango de valores posibles para el parámetro.</li>
                <li><strong className="font-bold">Incorpora la incertidumbre:</strong> El nivel de confianza cuantifica la fiabilidad de la estimación.</li>
                <li><strong className="font-bold">Más informativo:</strong> Ofrece una imagen más completa del parámetro de la población.</li>
            </ul>
            <h3 className="2xl font-medium mb-3">Desventajas:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong className="font-bold">Más complejo de calcular:</strong> Requiere más cálculos y conceptos estadísticos (errores estándar, valores críticos).</li>
                <li><strong className="font-bold">Interpretación:</strong> La interpretación del nivel de confianza puede ser un poco confusa para los principiantes.</li>
            </ul>
        </section>

        ---

        <section id="cuando-usar-cual" className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">¿Cuándo Usar Estimación Puntual y Cuándo por Intervalo?</h2>
            <p className="text-lg leading-relaxed mb-4">
                La elección entre estimación puntual y por intervalo depende del objetivo de tu análisis y de la información que necesitas comunicar:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6 text-lg">
                <li>
                    Utiliza la Estimación Puntual cuando:
                    <ul className="list-circle list-inside ml-5 mt-1">
                        <li>Necesitas una respuesta rápida y simple.</li>
                        <li>Estás realizando un análisis exploratorio inicial y solo quieres una primera idea.</li>
                        <li>La precisión no es crítica en esa etapa del estudio.</li>
                    </ul>
                </li>
                <li>
                    Utiliza la Estimación por Intervalo cuando:
                    <ul className="list-circle list-inside ml-5 mt-1">
                        <li>Necesitas una medida de la precisión de tu estimación.</li>
                        <li>Quieres comunicar el grado de incertidumbre asociado a tu &quot;adivinanza&quot;.</li>
                        <li>Estás tomando decisiones importantes basadas en la estimación (por ejemplo, decisiones de negocio, resultados de investigación).</li>
                        <li>Es fundamental entender el rango de valores posibles para el parámetro de la población.</li>
                    </ul>
                </li>
            </ul>
            <p className="text-lg leading-relaxed">
                En la práctica, los estadísticos a menudo usan la estimación puntual como un primer paso, y luego la complementan con la estimación por intervalo para ofrecer una imagen más completa y confiable del parámetro de la población.
            </p>
        </section>

        ---

        <section id="conclusion" className="text-center bg-blue-50 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">¡Profundiza en la Estadística!</h2>
            <p className="text-lg leading-relaxed mb-6">
                La estimación es una herramienta fundamental en la estadística que nos permite tomar decisiones informadas a partir de datos limitados. Comprender la diferencia entre la estimación puntual y por intervalo es clave para interpretar correctamente los resultados y aplicarlos de manera efectiva en cualquier campo, desde la ciencia hasta los negocios. ¡Sigue explorando este fascinante mundo!
            </p>
            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Volver Arriba
            </Link>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-black"
          href="/"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Inicio
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-black"
          href="/confidence-interval"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Calculadora IC
        </Link>
      </footer>
    </div>
  );
}
