import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from './Hero';

describe("Render the hero content correctly", () => {
    it("should render the content correctly", () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );

        const h1 = screen.getByText("Our Clients");
        expect(h1).toBeInTheDocument();
    });
});
