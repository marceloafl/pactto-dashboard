"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Button from "@/components/button/Button";
import AddIcon from "@mui/icons-material/Add";
import SwitchButton from "@/components/package-board/switch/Switch";
import DeletePackageButton from "@/components/package-board/delete-package/DeletePackage";
import Board from "@/components/package-board/board/Board";

export default function PackagesForSale() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && (
        <button
          className="top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleAside}
        >
          Abrir Aside
        </button>
      )}
      <div className="flex">
        <div className="w-full flex justify-between ">
          <Button theme="primary" startIcon={<AddIcon />}>
            Add package
          </Button>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <Button theme="gray">Save changes</Button>
          <Button theme="primary">Payment details</Button>
        </div>
      </div>
      <div className="flex">
        <SwitchButton label="Package is unpublished" />
        <DeletePackageButton label="Delete package" />
      </div>
      <Board />
    </PageWrapper>
  );
}
