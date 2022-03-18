import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { getDadosImagem } from "../../api/api";

export function ImagemCrop({ imgInicial, imgFinal }) {
  const [src, setSrc] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [result, setResult] = useState(null);
  const [nome, setNome] = useState(
    imgInicial === null ? null : imgInicial.nome
  );
  const [tipo, setTipo] = useState(
    imgInicial === null ? null : imgInicial.tipo
  );
  const [dados, setDados] = useState(null);

  const carregarImagem = (event) => {
    const imgUp = event.target.files[0];
    setNome(imgUp.name);
    setTipo(imgUp.type);
    setSrc(URL.createObjectURL(imgUp));
  };

  const obterCropImg = () => {
    const canvas = document.createElement("canvas");
    const scaleX = imagem.naturalWidth / imagem.width;
    const scaleY = imagem.naturalHeight / imagem.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      imagem,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const imgBase64 = canvas.toDataURL("image/jpeg");
    setResult(imgBase64);
  };

  useEffect(() => {
    if (result !== null) {
      setDados(result.substring(23));
    }
  }, [result]);

  useEffect(() => {
    if (dados !== null) {
      imgFinal({
        id: imgInicial === null ? null : imgInicial.id,
        nome: nome,
        tipo: tipo,
        dados: dados,
      });
    }
  }, [dados]);

  useEffect(() => {
    const obterDadosImagem = async () => {
      if (imgInicial !== null) {
        const dadosImg = await getDadosImagem(imgInicial.id);
        setResult(
          dadosImg === null ? null : `data:image/jpeg;base64,${dadosImg}`
        );
        const contentType = tipo;
        const b64Data = dadosImg;

        const blob = b64toBlob(b64Data, contentType);
        const blobUrl = URL.createObjectURL(blob);
        setSrc(blobUrl);
      }
    };
    obterDadosImagem();
  }, []);

  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  return (
    <>
      <Form.Group className={`mb-2`}>
        <Form.Label>Imagem:</Form.Label>
        <Form.Control
          type={"file"}
          // required
          accept={"image/*"}
          onChange={carregarImagem}
        />
      </Form.Group>
      <div>
        <ReactCrop
          src={src}
          onImageLoaded={setImagem}
          crop={crop}
          onChange={setCrop}
        />
        <button
          type="button"
          onClick={obterCropImg}
          className={`btn btn-${result === null ? "danger" : "success" }`}
        >
          {result === null ? "Salvar" : "Salvo" }
        </button>
      </div>
      <div>
        <img src={result} className="img-fluid" alt="imagem a ser salva" />
      </div>
    </>
  );
}
