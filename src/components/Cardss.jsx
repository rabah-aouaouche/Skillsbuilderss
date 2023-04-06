import conf from "../assets/Conferences.jpg";
import Icon from "../assets/icoon.svg";
import ai from "../assets/ai.jpg";
import cybersec2 from "../assets/cybersec2.png";
import codeopt from "../assets/codeopt.jpg";

const Cards = () => {
  return (
    <div>
      <h1 className="text-white mb-2 text-2xl justify-center flex wrap items-center p-[50px]">
        Listes de conférences prévues
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
          <a href="#">
            <img class="rounded-t-lg" src={ai} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                L'avenir de l'intelligence artificielle: Développement et
                éthique
              </h5>
              <h4>
                Dans cette conférence, nous aborderons les dernières avancées en
                matière d'intelligence artificielle et comment les développeurs
                peuvent garantir une utilisation éthique et responsable de cette
                technologie.
              </h4>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Participez
            </a>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
          <a href="#">
            <img class="rounded-t-lg w-[450px] " src={cybersec2} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                L'importance de la sécurité dans le développement de logiciels
              </h5>
              <h4>
                Cette conférence explore l'importance de la sécurité dans le
                développement de logiciels et comment les développeurs peuvent
                identifier et prévenir les vulnérabilités pour protéger les
                utilisateurs.
              </h4>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Participez
            </a>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
          <a href="#">
            <img class="rounded-t-lg" src={codeopt} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Optimisation du code pour améliorer la performance
              </h5>
              <h4>
                Dans cette conférence, nous examinerons les meilleures pratiques
                pour optimiser le code et améliorer la performance, en explorant
                des exemples pratiques de techniques d'optimisation de code.
              </h4>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Participez
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-white mb-2 text-2xl justify-center flex wrap items-center p-[50px]">
        Listes des ateliers prévues
      </h1>
      <div className="bg-[#00C1A5]  max-w-[1440px] mb-16 mx-auto grid md:grid-cols-3 gap-8 p-[40px]">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img src={Icon} alt="" className="w-[13%]" />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Atelier d'introduction à la sécurité des applications Web
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Cet atelier offre une introduction aux concepts de sécurité liés aux
            applications Web, en explorant les vulnérabilités les plus courantes
            et les meilleures pratiques pour les prévenir. Les participants vont
            également découvrir des outils pour tester la sécurité des
            applications Web.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            Pour plus d'info
          </a>
        </div>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {" "}
            <img src={Icon} alt="" className="w-[13%]" />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Atelier de développement de chatbots
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Dans cet atelier, nous allons créer un chatbot en utilisant des
            outils tels que Dialogflow, Watson Assistant ou Rasa. Les
            participants apprendront comment entraîner un chatbot, créer des
            scénarios de conversation et intégrer le chatbot dans une
            application.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            Pour plus d'info
          </a>
        </div>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img src={Icon} alt="" className="w-[13%]" />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Atelier de développement d'applications mobiles avec Flutter
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Dans cet atelier, nous allons explorer le framework Flutter de
            Google pour le développement d'applications mobiles. Les
            participants apprendront comment créer des interfaces utilisateur,
            gérer l'état de l'application et interagir avec des API pour
            construire des applications mobiles cross-plateformes.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            Pour plus d'info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
