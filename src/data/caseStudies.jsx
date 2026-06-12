/**
 * Single source of truth for all case study content.
 *
 * Previously split across two files:
 *   - src/components/CaseStudies/CaseStudies.jsx (list-card data)
 *   - src/data/caseStudies.jsx (detail-page content)
 *
 * Each entry contains all fields needed by both consumers:
 *   - List card:  id, slug, cardTitle, subtitle, problem, solution, impact, ctaText, reverse
 *   - Detail page: title, overview, problemContext, architecture, challenges, outcomes, keyLearning
 *
 * Exports:
 *   caseStudiesArray — ordered array, consumed by the CaseStudies list component
 *   caseStudiesMap   — object keyed by slug, consumed by the CaseStudy detail page
 */

import React from 'react';

export const caseStudiesArray = [
  // ─── Case Study 1 ────────────────────────────────────────────────────────────
  {
    // Shared identity
    id: 1,
    slug: 'microfrontend-platform',

    // List-card fields
    cardTitle: 'Scalable Microfrontend Platform',
    subtitle: 'Designing independently deployable frontend systems for multi-team product delivery.',
    problem: (
      <>
        <p>The legacy monolith suffered from coupled releases and duplicated code, which severely constrained team autonomy and slowed down product delivery.</p>
      </>
    ),
    solution: (
      <>
        <p>Architected a shell-and-federated application system that isolated domains while preserving a shared runtime layer and consistent user experience.</p>
      </>
    ),
    impact: (
      <div className="impact-grid">
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">group_work</span>
          <span>Multi-team delivery enablement</span>
        </div>
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">layers</span>
          <span>Shared platform reuse</span>
        </div>
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">rocket_launch</span>
          <span>Independent deployment model</span>
        </div>
      </div>
    ),
    ctaText: 'Read Full Architecture Writeup',
    reverse: false,

    // Detail-page fields
    title: 'Designing a Scalable Microfrontend Platform for Enterprise Products',
    overview: 'As product surfaces grew across multiple teams, frontend delivery began to show classic scaling problems. Release coordination became increasingly coupled. Shared functionality was duplicated across applications. Team autonomy was constrained by centralized deployments. Frontend architecture was becoming harder to evolve sustainably. The challenge was not merely building more UI. It was enabling multiple teams to build independently without losing consistency or architectural integrity.',
    problemContext: (
      <>
        <p>The product ecosystem was evolving into multiple functional domains, each needing independent development, independent deployment, shared product experience, and consistent engineering foundations. Traditional monolithic frontend approaches were beginning to create friction.</p>
        <p><strong>Some recurring issues:</strong></p>
        <ul>
          <li><strong>Deployment Coupling:</strong> Changes in one domain often became entangled with releases for others, slowing delivery.</li>
          <li><strong>Shared Code Duplication:</strong> Teams were re-solving common problems (auth concerns, shell behaviors, UI patterns, bootstrapping), leading to inconsistency and maintenance overhead.</li>
          <li><strong>Blurry Ownership Boundaries:</strong> As domains grew, boundaries in the frontend architecture became increasingly important. Without stronger separation, teams stepped on each other's changes, scaling engineering became difficult, and code ownership eroded.</li>
        </ul>
      </>
    ),
    architecture: (
      <>
        <p>We explored and contributed to a microfrontend model centered around:</p>
        <pre className="arch-code-block"><code>
Shell Application
├── Authentication MFE
├── Workflow / Imaging MFE
├── Reporting MFE
└── Shared Platform Layer
        </code></pre>
        <p><strong>Shell Application:</strong> The shell handled global routing, application composition, shared runtime concerns, and cross-cutting integrations. The shell became orchestration, not feature ownership.</p>
        <p><strong>Federated Applications:</strong> Feature domains could evolve as independently deployable applications while still participating in a unified product surface. This created stronger ownership boundaries, team autonomy, and scalable domain growth.</p>
      </>
    ),
    challenges: (
      <>
        <p>This is where most of the interesting work lived.</p>
        <ul>
          <li><strong>Shared Dependencies:</strong> Which dependencies should be shared? Which should remain isolated? How much runtime sharing is worth the coupling? These are architectural tradeoffs, not obvious decisions.</li>
          <li><strong>State Boundaries:</strong> How much state belongs globally versus inside domain MFEs? Too much global state creates coupling. Too little creates fragmented experiences. Finding the right boundary mattered.</li>
          <li><strong>Runtime Composition vs Complexity:</strong> Runtime composition increases flexibility, but it can introduce performance implications, debugging complexity, and versioning challenges. Tradeoffs had to be considered deliberately.</li>
        </ul>
      </>
    ),
    outcomes: (
      <>
        <p>This architecture enabled:</p>
        <ul>
          <li>Greater team autonomy</li>
          <li>Reduced duplication through shared foundations</li>
          <li>A scalable model for multi-team frontend delivery</li>
          <li>Stronger architectural boundaries</li>
        </ul>
        <p>And just as importantly, it created a model that could grow with product complexity.</p>
      </>
    ),
    keyLearning: 'Microfrontends are rarely just a technical pattern. They are often a response to organizational scale. That was perhaps the biggest lesson.',
  },

  // ─── Case Study 2 ────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: 'shared-ui-libraries',

    // List-card fields
    cardTitle: 'Shared Platform Libraries',
    subtitle: 'Building internal npm packages for consistency, reuse and engineering leverage.',
    problem: (
      <>
        <p>Repeated patterns across UI components, localization, and bootstrapping created duplicated effort and inconsistent user experiences.</p>
      </>
    ),
    solution: (
      <>
        <p>Productized internal platform packages designed as a robust, versioned, and reusable foundation across the engineering organization.</p>
      </>
    ),
    impact: (
      <div className="impact-grid">
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">speed</span>
          <span>Faster product development</span>
        </div>
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">design_services</span>
          <span>Stronger UI consistency</span>
        </div>
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">settings_applications</span>
          <span>Shift to platform leverage</span>
        </div>
      </div>
    ),
    ctaText: 'Read Full Architecture Writeup',
    reverse: true,

    // Detail-page fields
    title: 'Building Shared UI Platform Libraries as Internal npm Packages',
    overview: 'As applications and teams grew, another problem emerged: Teams were repeatedly solving the same problems. Not only in components, but in platform-level concerns. The opportunity was to move from isolated implementations to reusable shared engineering assets.',
    problemContext: (
      <>
        <p>Repeated patterns existed across products: UI components, localization patterns, bootstrapping logic, and shared frontend infrastructure concerns.</p>
        <p>This created duplicated effort, inconsistent experiences, and slower development velocity.</p>
        <p><strong>The question became:</strong> How do we create reuse without creating rigid shared dependencies?</p>
      </>
    ),
    architecture: (
      <>
        <p>We contributed to building internal npm libraries intended to function as shared platform building blocks. Rather than treating libraries as "component dumps," we approached them as productized internal platforms.</p>
        <p><strong>Shared Library Categories:</strong></p>
        <ul>
          <li><strong>Component Libraries:</strong> Reusable UI primitives and product components (form controls, workflow primitives, layout systems). Focus was consistency and reuse.</li>
          <li><strong>Localization Utilities:</strong> Cross-application localization support was abstracted into reusable shared capabilities, removing repeated implementation effort.</li>
          <li><strong>Frontend Bootstrapping Packages:</strong> Shared packages helped standardize application setup, common initialization concerns, and opinionated defaults to improve consistency across products.</li>
        </ul>
      </>
    ),
    challenges: (
      <>
        <p>Shared libraries sound simple. They aren't.</p>
        <ul>
          <li><strong>Over-Abstraction Risk:</strong> Abstracting too early is a danger. Shared libraries can become generic in the wrong ways. We had to think carefully about what belongs in shared platform layers vs. what should remain product-specific.</li>
          <li><strong>Versioning and Adoption:</strong> Internal package evolution creates its own problems. How do you ship improvements, avoid breaking consumers, and encourage adoption without forcing upgrades? Versioning strategy mattered.</li>
          <li><strong>Platform vs Product Tension:</strong> Are we optimizing for platform purity, or product delivery? The right answer is often balance.</li>
        </ul>
      </>
    ),
    outcomes: (
      <>
        <p>Shared libraries helped create:</p>
        <ul>
          <li>Reduced duplication</li>
          <li>Faster product development</li>
          <li>Stronger consistency across applications</li>
          <li>Reusable foundations teams could build on</li>
        </ul>
        <p>But perhaps more importantly, they shifted thinking from feature delivery into platform leverage.</p>
      </>
    ),
    keyLearning: 'Reusable libraries are not really about reuse. They are about engineering leverage. That mindset changes how you build them.',
  },

  // ─── Case Study 3 ────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: 'bff-orchestration',

    // List-card fields
    cardTitle: 'Backend-for-Frontend Orchestration',
    subtitle: 'Using BFF architecture to simplify UI complexity and improve boundaries.',
    problem: (
      <>
        <p>Frontend applications absorbed too much orchestration logic (transformation, aggregation, validation), drastically increasing maintainability risk.</p>
      </>
    ),
    solution: (
      <>
        <p>Introduced a dedicated Node.js/Express BFF layer to aggregate downstream APIs and provide clean, UI-oriented contracts.</p>
      </>
    ),
    impact: (
      <div className="impact-grid">
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">code_blocks</span>
          <span>Simplified UI logic</span>
        </div>
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">mediation</span>
          <span>Better separation of concerns</span>
        </div>
        <div className="impact-card">
          <span className="material-symbols-outlined impact-icon">api</span>
          <span>UI-optimized API contracts</span>
        </div>
      </div>
    ),
    ctaText: 'Read Full Architecture Writeup',
    reverse: false,

    // Detail-page fields
    title: 'Using Backend-for-Frontend to Simplify UI Complexity',
    overview: 'As product workflows grew more complex, frontend applications were beginning to absorb orchestration logic that didn\'t really belong in the UI. Transformation logic. Aggregation. Validation. Contract adaptation. The frontend was doing too much. That often signals an architectural problem.',
    problemContext: (
      <>
        <p>The UI frequently had to interact with multiple downstream services, often needing response shaping, data aggregation, validation layers, and UI-oriented orchestration.</p>
        <p>Embedding too much of this directly in frontend code increased complexity, coupling, and maintainability risk.</p>
      </>
    ),
    architecture: (
      <>
        <p>A Backend-for-Frontend layer was introduced for UI-oriented concerns.</p>
        <pre className="arch-code-block"><code>
Frontend
  ↓
BFF Layer (Node.js/Express)
  ↓
Multiple Downstream APIs
        </code></pre>
        <p>Built using Node.js and Express, the BFF served as an interface tailored to frontend needs.</p>
        <ul>
          <li><strong>Data Transformation:</strong> Shape backend responses into forms the UI actually needs, reducing frontend complexity.</li>
          <li><strong>Aggregation:</strong> Combine data from multiple services behind one frontend-facing contract. Cleaner for the UI.</li>
          <li><strong>Validation and Orchestration:</strong> Certain workflow concerns fit better in an orchestration layer than in client code. This improved separation of concerns.</li>
        </ul>
      </>
    ),
    challenges: (
      <>
        <p>This pattern introduces good questions.</p>
        <ul>
          <li><strong>What Belongs in the BFF?</strong> A major architectural judgment. Push too much into the BFF, and it becomes another monolith. Push too little, and the frontend remains overloaded. Boundary definition mattered.</li>
          <li><strong>Contract Evolution:</strong> As APIs evolved, BFF contracts had to evolve thoughtfully. Versioning and ownership become important.</li>
          <li><strong>Performance Considerations:</strong> Aggregation layers can improve frontend simplicity, but can introduce latency concerns if designed poorly. Tradeoffs were always part of the discussion.</li>
        </ul>
      </>
    ),
    outcomes: (
      <>
        <p>The BFF approach helped enable:</p>
        <ul>
          <li>Cleaner frontend architecture</li>
          <li>Simpler UI logic</li>
          <li>Better separation of concerns</li>
          <li>More UI-oriented contracts</li>
        </ul>
        <p>It improved both developer experience and product maintainability.</p>
      </>
    ),
    keyLearning: 'Some frontend problems are actually interface-boundary problems. And sometimes the best frontend optimization happens outside the frontend.',
  },
];

/**
 * O(1) slug-keyed lookup — consumed by the CaseStudy detail page.
 * Derived from caseStudiesArray so the two are always in sync.
 */
export const caseStudiesMap = Object.fromEntries(
  caseStudiesArray.map((cs) => [cs.slug, cs])
);
