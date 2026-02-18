"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  
  return (
    <div className="overflow-hidden h-screem">
      <header className="md:flex items-center justify-between p-2">
        <Image src={"/Verisure_logo.png"} alt="logo" width={300} height={300} />
        <div>
          <p className="text-red-600">Especialista de segurança:</p>
          <h1 className=" text-2xl text-red-600 uppercase font-bold">
            Rodrigo Hart
          </h1>
        </div>
      </header>
      <main className="md:flex items-center justify-between bg-[url('/image.jpg')]">
        <div>
          <h2 className="text-white uppercase w-2/3 text-3xl p-4 border-l-8 border-red-600">
            Novo alarme Verisure com videomonitoramento Até 40% de desconto
          </h2>
          <Button
            asChild
            className="flex m-5 text-white w-1/2 hover:text-red-600 uppercase font-bold bg-red-600 text-center">
            <Link
              href={
                "https://wa.me/5521995857937?text=Ol%C3%A1%20Especialista%2C%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gr%C3%A1tis%20do%20sistema%20da%20Verisure%20com%2040%25%20de%20desconto."
              }
              target="_blank">
              Faça sua Cotação
            </Link>
          </Button>
        </div>
        <Image
          src={"/image.png"}
          alt="minhaImg"
          width={1260}
          height={500}
          className="hidden md:flex"
        />
        <Image
          src={"/image.png"}
          alt="minhaImg"
          width={760}
          height={400}
          className="md:hidden"
        />
      </main>
      <div className="md:h-screen md:w-screen md:flex items-center justify-between mx-2 ">
        <Image
          src={"/banner01.jpg"}
          alt="minhaImg"
          width={760}
          height={600}
          className="p-4"
        />
        <h2 className="text-4xl p-8 text-center text-red-600">
          "Não tenha medo, tenha Verisure"
        </h2>
      </div>
      <div className="w-screen h-fit flex flex-col p-4 text-center bg-gray-400 text-white">
        <h2 className="text-2xl">
          Você conhece todos os pontos vuneráveis da sua casa ou comércio?
        </h2>
        <p className="p-4">Solicite seu estudo de segurança gratuito</p>
        <div>
          <Button
            asChild
            className="mb-2 text-white hover:text-red-600 uppercase font-bold bg-red-600 text-center">
            <Link
              href={
                "https://wa.me/5521995857937?text=Ol%C3%A1%20Especialista%2C%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gr%C3%A1tis%20do%20sistema%20da%20Verisure%20com%2040%25%20de%20desconto."
              }
              target="_blank">
              Solicite Aqui Gratuitamente
            </Link>
          </Button>
        </div>
      </div>
      <div className="h-fit flex flex-col text-center py-8">
        <p className="text-red-600 font-bold">Novidade</p>
        <h2 className="text-3xl text-red-600 px-2 uppercase">
          Videomonitoramento
        </h2>
        <p className="text-red-600 m-0 md:hidden">Nova Camera Arlo</p>
        <div className="flex items-center">
          <Image
            src={"/arlo.jpg"}
            alt="minhaImg"
            width={960}
            height={600}
            className="md:w-1/2 md:py-5 md:rounded-r-4xl md: pl-0"
          />
          <div className="hidden m-5 text-red-600 md:flex flex-col justify-center w-1/2">
            <h3 className="text-2xl p-4 font-bold">Nova Camera Arlo</h3>
            <ol>
              <li>Resolução Full HD 1080p</li>
              <li>Visão noturna</li>
              <li>Armazenamento em Nuvem</li>
              <li>Sirene integrada</li>
              <li>Holofote integrado</li>
              <li>Áudio bidirecional</li>
              <li>Alta qualidade</li>
              <li>Ângulo de visão de 130°</li>
            </ol>
            <Button
              asChild
              className="m-2 text-white hover:text-red-600 uppercase font-bold bg-red-600 text-center">
              <Link
                href={
                  "https://wa.me/5521995857937?text=Ol%C3%A1%20Especialista%2C%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gr%C3%A1tis%20do%20sistema%20da%20Verisure%20com%2040%25%20de%20desconto."
                }
                target="_blank">
                Saiba Mais
              </Link>
            </Button>
          </div>
        </div>
        <Button
          asChild
          className="m-2 text-white hover:text-red-600 uppercase font-bold bg-red-600 text-center md:hidden">
          <Link
            href={
              "https://wa.me/5521995857937?text=Ol%C3%A1%20Especialista%2C%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gr%C3%A1tis%20do%20sistema%20da%20Verisure%20com%2040%25%20de%20desconto."
            }
            target="_blank">
            Saiba Mais
          </Link>
        </Button>
      </div>
      <footer className="h-12 flex items-center justify-center text-red-600 bg-gray-400">
        <p className="text-sm md:text-left p-2 text-center">
          Site desenvolvido para atendimento do especialista Rodrigo Hart da
          Verisure Brasil - Filial 230
        </p>
      </footer>
    </div>
  );
}
 