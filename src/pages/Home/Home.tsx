import styles from "./Home.module.css";
import { Link } from "solid-app-router";
import { onMount } from "solid-js";
import { setTitle } from "../../libs/meta-utils";

export function Home() {
  onMount(() => {
    setTitle("Home");
  });
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          Edit <code>src/App.tsx</code>.
        </p>
        <Link href="/xss">
          <button class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
            Save Changes
          </button>
        </Link>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}
