import React, { act } from "react";
import Hero from "../landing_page/home/Hero";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Hero Component", () => {
    test("Render hero image", () => {
        render(<Hero />);
        const heroImage = screen.getAllByAltText("Hero Image")[0];

        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
     
});
