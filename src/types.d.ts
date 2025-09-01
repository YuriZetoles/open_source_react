declare module "*.json" {
  export type Project = {
    id: number;
    icone: string;
    cor: string;
    titulo: string;
    descricao: string;
    tecnologias: string[];
    link: string;
  };
  const value: Project[];
  export default value;
}
