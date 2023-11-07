import React from "react";
import Image from "next/image";
import { CertificationData } from "../../constants";

const Certification = () => {
  return (
    <div>
      <h3 className="text-3xl py-2 dark:text-white">
        License and Certifications
      </h3>

      {CertificationData.map((cval, id) => {
        const {
          credentialId,
          certificateName,
          certificationURL,
          issuingOrganization,
          issueDate,
          skills,
          image,
        } = cval;
        return (
          <div key={id}>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={image} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Certification Name: {certificateName}
                </h3>
                <p className="py-2">Credential Id : {credentialId}</p>
                <h4 className="py-4 text-teal-600">
                  Issued from : {issuingOrganization}
                </h4>
                <p className="text-gray-800 py-1">Issue Date : {issueDate}</p>
                <p className="text-gray-800 py-1">skills : {skills}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Certification;
