import Link from "next/link";
import Image from "next/image";
import React from "react";
import lazy from "react";

import ContactImageModule from "../modules/contact-image-module";
import ImageFull from "../modules/image-full";
import HeadingTextelement from "../modules/heading-description-element";

export default function ServicesPageLayout ({ service }) {

    const {
    attributes: {
        media,
        serviceHeadingComponent,
        dynamicServicePageContent
    },

    } = service.data;

    const dynamicContent = dynamicServicePageContent;

    console.log("Dynamisk sone fra layout: ", dynamicContent);

    /* const components = dynamicContent?.map((component, i) => {
        const { __typename: typeName, ...props } = component;
      
        // Dynamically import the component based on its function name
        const module = require(`../modules/${typeName}`);
  console.log(`Module for ${typeName}:`, module);
  const componentFn = module[typeName];
  console.log(`Component function for ${typeName}:`, componentFn);
      
        // Render the component
        return componentFn ? <componentFn key={typeName} {...props} /> : null;
      });
      console.log("Komponenter", components);  */

      /* const components = dynamicContent?.map((component) => {
        const ComponentType = React.lazy(() => import(`../modules/${component.__typename}`).then(module => module[component.componentName]));
        return <ComponentType key={component.id} {...component} />;
      });
      console.log("Komponenter", components); */

          // WORKING CODE:
    /* const components = dynamicContent?.map((component, i) => {
        const ComponentType = require(`../modules/${component.__typename}`).default;
        return <ComponentType key={i} {...component} />
      })
      console.log("Komponenter", components);  */

      const components = dynamicContent?.map((component) => {
        const ComponentType = require(`../modules/${component.__typename}`).default;
        return <ComponentType key={component.id} {...component} />;
      });
      console.log("Komponenter", components); 
      


    return (
        <>
        
        <ImageFull media={media} />

        <HeadingTextelement serviceHeadingComponent={serviceHeadingComponent} />

        {components?.map((components, i) => {
            return <div key={i}>{components}</div>
        })}

        
        </>
      )
    }


    // WORKING CODE:
    /* const components = dynamicContent?.map((component, i) => {
        const ComponentType = require(`../modules/${component.__typename}`).default;
        return <ComponentType key={i} {...component} />
      })
      console.log("Komponenter", components);  */