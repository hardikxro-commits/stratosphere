interface ChapterContent {
  overview: string;
  concepts: { title: string; body: string }[];
  keyPoints: string[];
  importantQuestions?: string[];
}

const content: Record<string, ChapterContent> = {
  "rotational-dynamics": {
    overview:
      "Have you ever watched a figure skater pull their arms in and spin faster, or wondered why it is so much harder to stop a spinning bicycle wheel than one that is not moving? These are the kinds of questions rotational dynamics answers. While translational motion deals with objects moving from one place to another, rotational dynamics is all about things that spin — wheels, planets, tops, gears, and even the Earth itself. And just like there are precise laws describing how objects move in straight lines — Newton's laws, momentum, energy — there is an equally elegant set of laws for spinning things.\n\nLet us start with the most basic idea: an object that is spinning has rotational inertia. You know how hard it is to push a heavy shopping cart? That is mass resisting linear acceleration. Well, moment of inertia is the rotational equivalent — it tells you how hard it is to change an object's rotation. But unlike mass, moment of inertia depends not just on how much mass something has, but on where that mass is located relative to the axis of rotation. A long pole with masses at the ends is much harder to spin than the same pole with the masses clustered near the middle. This is why a tightrope walker carries a long pole — the mass at the ends gives them a high moment of inertia, keeping them stable and preventing them from rotating and falling.\n\nNow, what makes something start spinning? Torque. If force is what makes something move in a straight line, torque is what makes it rotate. Torque depends on three things: how much force you apply, how far from the pivot you apply it (the lever arm), and the angle at which you push. Open a door by pushing near the hinge — it is hard. Push at the handle — much easier. That is torque in action. The same force produces more torque when applied farther from the pivot. This is why wrenches have long handles, why pedals are placed at the ends of crank arms on bicycles, and why doorknobs are always as far from the hinges as possible.\n\nThe real magic happens when you put it all together. Angular momentum — the rotational version of momentum — is conserved when no external torque acts. This single principle explains why a spinning top stays upright, why a bicycle is easier to balance when moving, why hurricanes spin faster as they form, and why neutron stars can rotate hundreds of times per second. From figure skaters to galaxies, from gyroscopes in your phone to the Earth's rotation, rotational dynamics is the physics of everything that spins. And as you will see, the equations are beautifully parallel to those of linear motion — learn one, and you are halfway to understanding the other.",
    concepts: [
      {
        title: "Centre of Mass of a Rigid Body",
        body:
          "Every object, no matter how oddly shaped, has a special point called the centre of mass. It is the point where the entire mass of the body can be considered to be concentrated for many purposes. For a uniform rod, it is right at the middle. For a ring, it is at the geometric centre — even though there is no material there. For a system of particles, the centre of mass is the weighted average of their positions: R_cm = (Σ mᵢ rᵢ) / (Σ mᵢ). If you apply a force at the centre of mass, the object will translate without rotating. If you apply a force anywhere else, you get both translation and rotation. This is why you push a door at the handle — pushing near the hinge (close to the centre of rotation, not the centre of mass) would just cause rotation about the hinge. For continuous objects, we integrate: r_cm = (∫ r dm) / M. For symmetric objects like a sphere, cube, or cylinder with uniform density, the centre of mass coincides with the geometric centre.",
      },
      {
        title: "Motion of the Centre of Mass",
        body:
          "The centre of mass of a system behaves as if all the mass were concentrated there and all external forces acted there. That means F_ext = M A_cm — the net external force equals total mass times acceleration of the centre of mass. This is huge: it means the overall motion of a complex system (like an exploding firework or a diving board) can be analysed by looking only at the centre of mass. Internal forces, no matter how complicated, cancel out and do not affect the motion of the centre of mass. When a firework explodes, the fragments go in all directions, but the centre of mass continues along the same parabolic path it was following before the explosion.",
      },
      {
        title: "Torque and Its Physical Meaning",
        body:
          "Torque (τ) is the rotational equivalent of force. Mathematically, τ = r × F, where r is the vector from the pivot to the point of application of the force. The magnitude is τ = rF sinθ, which is also equal to the force times the perpendicular distance from the pivot to the line of action of the force (the lever arm). This is key: torque depends not just on how hard you push, but on where and at what angle you push. Opening a heavy door is effortless if you push at the edge, perpendicular to the door. Pushing near the hinge at a shallow angle barely works at all. Torque is a vector quantity — its direction is given by the right-hand rule.",
      },
      {
        title: "Angular Momentum — The Spin Momentum",
        body:
          "Angular momentum (L) is the rotational counterpart of linear momentum. For a point particle, L = r × p = m(r × v). For a rigid body rotating about a fixed axis, L = Iω. Angular momentum is a vector, and its direction is along the axis of rotation (given by the right-hand rule). The relationship between torque and angular momentum mirrors Newton's second law: τ = dL/dt. The net external torque acting on a system equals the rate of change of its angular momentum. If no external torque acts, angular momentum is conserved. This is why a spinning bicycle wheel is hard to tilt — changing its orientation means changing its angular momentum vector, which requires torque.",
      },
      {
        title: "Moment of Inertia — The Rotational Mass",
        body:
          "Moment of inertia (I) measures how difficult it is to change an object's rotational state. For a system of particles, I = Σ mᵢ rᵢ² — each particle's mass times the square of its distance from the axis. Notice the r² dependence: mass that is twice as far from the axis contributes four times as much to the moment of inertia. That is why a long pole with masses at the ends has a huge moment of inertia compared to the same pole with masses at the centre. For continuous objects, we integrate: I = ∫ r² dm. Standard results include: a ring (MR²), a solid disc (½MR²), a solid sphere (⅖MR²), a hollow sphere (⅔MR²), and a rod about its centre (ML²/12).",
      },
      {
        title: "Radius of Gyration",
        body:
          "The radius of gyration (k) is the distance from the axis where the entire mass of the body would need to be concentrated to give the same moment of inertia. Mathematically, I = Mk², so k = √(I/M). It is a convenient way to express how spread out the mass is relative to the axis. A ring has k = R (all mass at distance R), while a solid disc has k = R/√2 (mass is spread from centre to edge, so the equivalent distance is smaller). The radius of gyration depends on both the shape of the body and the axis of rotation.",
      },
      {
        title: "Parallel Axis Theorem",
        body:
          "The parallel axis theorem lets you find the moment of inertia about any axis parallel to one through the centre of mass. It states: I = I_cm + Md², where d is the distance between the two parallel axes. This is incredibly useful because the moment of inertia about the centre of mass is usually the easiest to calculate or look up, but real problems often involve axes that do not pass through the centre of mass. For example, the moment of inertia of a rod about one end is ML²/12 (about centre) + M(L/2)² = ML²/3.",
      },
      {
        title: "Perpendicular Axis Theorem",
        body:
          "The perpendicular axis theorem applies to thin, flat (planar) objects. It says: I_z = I_x + I_y, where I_z is the moment of inertia about an axis perpendicular to the plane, and I_x and I_y are moments about two perpendicular axes lying in the plane, all three axes intersecting at a common point. For example, for a thin circular disc, I_x = I_y = MR²/4 (by symmetry), so I_z = MR²/2. This theorem works because for a planar object, r² = x² + y², so ∫ r² dm = ∫ x² dm + ∫ y² dm.",
      },
      {
        title: "Rotational Kinetic Energy",
        body:
          "A rotating body stores kinetic energy: K_rot = ½Iω². This is exactly analogous to translational kinetic energy (½mv²), with I replacing m and ω replacing v. For a rolling object, the total kinetic energy is the sum of translational and rotational parts: K_total = ½Mv² + ½Iω². Since v = ωR for rolling without slipping, you can write K_total = ½Mv²(1 + I/(MR²)). The term I/(MR²) is a shape-dependent constant — for a solid sphere it is ⅖, for a hollow sphere it is ⅔, for a disc it is ½.",
      },
      {
        title: "Conservation of Angular Momentum",
        body:
          "When the net external torque on a system is zero, its total angular momentum is conserved: L_initial = L_final, or I₁ω₁ = I₂ω₂. This principle explains a stunning range of phenomena. A ballet dancer spins faster by pulling her arms in (reducing I, so ω increases). A cat dropped upside down twists its body to land on its feet — it rotates parts of its body in opposite directions so overall angular momentum stays zero. A rotating neutron star spins at incredible speeds because the original star's slow rotation was conserved as the radius shrank from millions of kilometres to just 10-20 km.",
      },
      {
        title: "Rolling Without Slipping",
        body:
          "Rolling without slipping is a special kind of motion where the point of contact between the rolling object and the surface is instantaneously at rest. The condition is v_cm = ωR. At any instant, the bottom point of the wheel has zero velocity relative to the ground, the top point moves at 2v_cm, and the centre moves at v_cm. The friction involved is static friction — it does no work but it provides the torque needed for rolling. On a perfectly frictionless surface, a wheel would slide without rolling.",
      },
      {
        title: "Torque and Angular Acceleration",
        body:
          "The rotational analogue of Newton's second law is τ = Iα. The net torque on a body equals its moment of inertia times its angular acceleration. This is a direct consequence of τ = dL/dt and L = Iω. If you know the torque and the moment of inertia, you can find α, and then use rotational kinematic equations to find ω and θ as functions of time. This is how you analyse a pulley system: the tension difference creates a torque, causing angular acceleration.",
      },
      {
        title: "Equilibrium of Rigid Bodies",
        body:
          "A rigid body is in equilibrium when both its linear acceleration and angular acceleration are zero. This gives two conditions: ΣF = 0 (translational equilibrium) and Στ = 0 (rotational equilibrium). The torque condition must hold about any axis — you can choose the axis conveniently to simplify calculations. For example, when analysing a ladder leaning against a wall, taking torques about the bottom eliminates unknown forces at the bottom.",
      },
      {
        title: "Kinematics of Rotational Motion",
        body:
          "Just as linear motion has equations like v = u + at and s = ut + ½at², rotational motion has perfect analogues. If α is constant: ω = ω₀ + αt, θ = ω₀t + ½αt², and ω² = ω₀² + 2αθ. Here θ is angular displacement (in radians), ω is angular velocity (rad/s), and α is angular acceleration (rad/s²). The connection between angular and linear quantities: s = rθ, v = rω, a_tan = rα, and a_rad = v²/r = ω²r.",
      },
      {
        title: "Angular Momentum in Terms of Moment of Inertia",
        body:
          "For a rigid body rotating about a fixed axis, L = Iω. The direction of L is along the axis of rotation, following the right-hand rule. The relationship τ = dL/dt can be integrated: the angular impulse (∫ τ dt) equals the change in angular momentum. This is the rotational version of the impulse-momentum theorem, useful for problems involving collisions that cause rotation.",
      },
      {
        title: "Angular Momentum Conservation: Practical Applications",
        body:
          "Beyond textbook problems, conservation of angular momentum governs much of the universe. Hurricanes spin faster as they form because air rushing inward decreases the moment of inertia, increasing rotation speed. The Earth's rotation is slowly slowing down due to tidal friction from the Moon. In engineering, helicopter rotors use a tail rotor to provide counter-torque. Gyroscopic stabilisers use angular momentum conservation to maintain orientation. Even a spinning bullet is more stable in flight due to angular momentum.",
      },
      {
        title: "Comparison of Translational and Rotational Quantities",
        body:
          "Seeing the full analogy helps build intuition. Translational: displacement (x), velocity (v), acceleration (a), mass (m), force (F = ma), momentum (p = mv), kinetic energy (½mv²). Rotational: angular displacement (θ), angular velocity (ω), angular acceleration (α), moment of inertia (I), torque (τ = Iα), angular momentum (L = Iω), rotational KE (½Iω²). Every linear equation has a rotational twin. If you are stuck on a rotational problem, ask yourself: how would I solve the equivalent linear problem? Then translate.",
      },
      {
        title: "Rotational Dynamics of Systems of Particles",
        body:
          "For a system of particles, the total angular momentum is the sum of the angular momenta of individual particles: L_total = Σ rᵢ × pᵢ. The torque on the system equals the rate of change of total angular momentum, dL_total/dt = Σ τ_ext — only external torques matter. Internal torques cancel out. This is why a spinning diver can change shape without any external torque — internal forces change I, altering ω, but L stays constant.",
      },
    ],
    keyPoints: [
      "Centre of mass is the weighted average position of all mass in a system.",
      "Torque τ = r × F. Magnitude τ = rF sinθ = F × (lever arm).",
      "Angular momentum L for a point particle is r × p. For a rigid body about a fixed axis, L = Iω.",
      "Newton's second law for rotation: τ_net = Iα = dL/dt.",
      "Moment of inertia I = Σ mᵢrᵢ² = ∫ r² dm. Depends on mass distribution relative to the axis.",
      "Radius of gyration k = √(I/M).",
      "Parallel axis theorem: I = I_cm + Md².",
      "Perpendicular axis theorem (for planar objects): I_z = I_x + I_y.",
      "Standard moments of inertia: Ring MR², Disc ½MR², Solid sphere ⅖MR², Hollow sphere ⅔MR², Rod about centre ML²/12.",
      "Rotational kinetic energy: K_rot = ½Iω². Total KE of rolling body = ½Mv² + ½Iω².",
      "Conservation of angular momentum: If Στ_ext = 0, L = constant.",
      "Rolling without slipping: v_cm = ωR.",
      "Equilibrium conditions: ΣF = 0 and Στ = 0.",
      "Rotational kinematics (constant α): ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ.",
      "Relation between linear and angular quantities: s = rθ, v = rω, a_tan = rα, a_rad = ω²r.",
      "Power in rotational motion: P = τ·ω.",
      "Angular impulse: ∫ τ dt = ΔL.",
    ],
    importantQuestions: [
      "A solid sphere, a hollow sphere, a solid cylinder, and a hollow cylinder of the same mass and radius roll down an inclined plane without slipping. Determine the order in which they reach the bottom and explain why.",
      "Derive an expression for the kinetic energy of a body rolling without slipping.",
      "State the law of conservation of angular momentum. Give three real-life examples where it is observed.",
      "Explain why a figure skater spins faster when they pull their arms in.",
      "Derive the parallel axis theorem and use it to find the moment of inertia of a thin uniform rod about one end.",
      "A uniform circular disc of mass M and radius R is free to rotate about a horizontal axis through its centre. A particle of mass m hits the disc at a distance R/2 from the centre with velocity v perpendicular to the radius. Find the angular velocity just after the collision.",
      "Obtain expressions for the moment of inertia of a thin circular ring and a solid cylinder about axes through their centres.",
      "A wheel of radius 0.5 m starts from rest and accelerates uniformly. After 10 seconds, its angular velocity is 20 rad/s. Find the angular acceleration and the number of rotations made.",
    ],
  },
  "mechanical-properties-fluids": {
    overview:
      "Fluids — liquids and gases — are everywhere around us, and they behave in ways that often defy our everyday intuition. Have you ever wondered how a massive ship made of steel floats on water, or how a tiny needle can rest on the surface of water without sinking? Why does honey pour so much more slowly than water, and why does a liquid jet break up into droplets? The mechanical properties of fluids give us the answers. This branch of physics deals with fluids at rest (fluid statics) and fluids in motion (fluid dynamics), covering everything from the pressure at the bottom of the ocean to the lift that keeps an aeroplane in the sky.\n\nLet us begin with pressure. Pressure is defined as force per unit area (P = F/A). Unlike solids, where a force can be applied in one direction, fluids exert pressure equally in all directions. A swimmer feels pressure from all sides — not just from above. This is Pascal's law: in an enclosed fluid, a pressure change at any point is transmitted undiminished throughout the fluid. This seemingly simple principle has enormous practical applications. Hydraulic lifts, hydraulic brakes in cars, and hydraulic presses all work on this principle. A small force applied to a small-area piston creates a pressure that is transmitted to a large-area piston, multiplying the force.\n\nNow consider what happens when you immerse an object in a fluid. The pressure increases with depth because the weight of the fluid above pushes down. The pressure at depth h in a fluid of density ρ is P = P₀ + ρgh, where P₀ is the pressure at the surface. This increasing pressure with depth causes an upward buoyant force — Archimedes' principle. An object feels lighter in water because the buoyant force partially cancels its weight. A ship floats because its shape displaces enough water that the buoyant force equals the ship's weight. A submarine adjusts its buoyancy by taking on or releasing water.\n\nAnd then there are fluids in motion. Bernoulli's principle is the superstar of fluid dynamics. It says that where the speed of a fluid is high, the pressure is low, and vice versa. This explains how an aeroplane wing generates lift, how a carburettor works, why a curved cricket ball swings, and why a roof flies off in a storm (wind above creates low pressure). But real fluids also have viscosity — internal friction. Honey is more viscous than water. Viscosity causes drag and energy loss. Surface tension makes water droplets spherical and allows insects to walk on water. Together, these properties determine how fluids behave in the natural and engineered world — from blood flow in your arteries to oil flow in pipelines, from raindrops to the design of ships and aircraft.",
    concepts: [
      {
        title: "Pressure in Fluids",
        body:
          "Pressure is defined as the normal force per unit area: P = F/A. In fluids, pressure acts equally in all directions at a given point. The SI unit of pressure is the pascal (Pa), where 1 Pa = 1 N/m². Atmospheric pressure at sea level is about 1.01 × 10⁵ Pa, also called 1 atm. Other common units include bar (1 bar = 10⁵ Pa), torr (1 torr = 133.3 Pa, approximately 1 mmHg), and psi (pounds per square inch). Pressure in a fluid at rest increases with depth: P = P₀ + ρgh. This is why dams are built thicker at the bottom — the pressure is much greater there. It also explains why a small hole near the bottom of a water tank shoots water much farther than a hole near the top.",
      },
      {
        title: "Pascal's Law and Hydraulic Machines",
        body:
          "Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. This is the operating principle of hydraulic systems. In a hydraulic lift, two cylinders of different cross-sectional areas are connected and filled with a fluid (usually oil). A force F₁ applied to the small piston of area A₁ creates pressure P = F₁/A₁. This pressure is transmitted through the fluid to the large piston of area A₂, producing a force F₂ = P × A₂ = (A₂/A₁)F₁. Since A₂ > A₁, the force is multiplied by the ratio of areas. Hydraulic brakes in cars work on the same principle — a small force on the brake pedal creates a much larger force on the brake pads. The work-energy principle holds: the small piston moves through a larger distance than the large piston, so input work equals output work.",
      },
      {
        title: "Variation of Pressure with Depth",
        body:
          "Consider a fluid in a container open to the atmosphere. Take a horizontal area element at depth h below the surface. The weight of the fluid column above this area is mg = ρVg = ρ(Ah)g. The force on the area from above is the weight of the column plus the force from atmospheric pressure: F = P₀A + ρghA. Therefore, P = P₀ + ρgh. This means pressure increases linearly with depth. At a depth of 10 m in water (density 1000 kg/m³), the pressure due to water alone is about 10⁵ Pa — roughly one additional atmosphere. At the deepest point in the ocean (the Mariana Trench, about 11 km deep), the pressure exceeds 1000 atm. The pressure is the same at all points at the same depth, regardless of the shape of the container (hydrostatic paradox).",
      },
      {
        title: "Archimedes' Principle and Buoyancy",
        body:
          "Archimedes' principle: any object wholly or partially immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the object. The buoyant force arises because the pressure at the bottom of the object is greater than the pressure at the top (since pressure increases with depth). This pressure difference creates a net upward force. Mathematically, F_b = ρ_fluid × V_displaced × g. An object floats if its density is less than the fluid's density (ρ_object < ρ_fluid), sinks if ρ_object > ρ_fluid, and hangs suspended at any depth if ρ_object = ρ_fluid. This is why ice (density 917 kg/m³) floats on water (density 1000 kg/m³) — about 92% of an iceberg is submerged. The apparent loss of weight of an object in a fluid equals the weight of the fluid displaced.",
      },
      {
        title: "Fluid Dynamics and Streamline Flow",
        body:
          "Fluid dynamics distinguishes between two types of flow: streamline (or laminar) and turbulent. In streamline flow, every particle of fluid follows the same smooth path (streamline), and different streamlines do not cross. The velocity at each point is constant in time. In turbulent flow, the paths become irregular, chaotic, and change with time — eddies and vortices form. Whether flow is laminar or turbulent is determined by the Reynolds number: Re = ρvD/η, where D is a characteristic length (like pipe diameter). Low Re (below about 2000) gives laminar flow. High Re (above about 3000) gives turbulent flow. Between them is a transition region. The equation of continuity for incompressible fluids states A₁v₁ = A₂v₂ — the product of cross-sectional area and velocity is constant along a pipe. Where the pipe is narrower, the fluid must flow faster.",
      },
      {
        title: "Bernoulli's Equation",
        body:
          "Bernoulli's equation for an ideal fluid (incompressible, non-viscous, steady, irrotational flow) is P + ½ρv² + ρgh = constant along a streamline. It is essentially a statement of conservation of energy per unit volume. The three terms represent: pressure energy (P), kinetic energy per unit volume (½ρv²), and potential energy per unit volume (ρgh). If the pipe is horizontal (h constant), the equation simplifies to P + ½ρv² = constant — where velocity is high, pressure is low, and vice versa. This explains the Venturi effect, the working of a carburettor, the lift on an aeroplane wing, and the curved trajectory of a spinning ball (the Magnus effect). Bernoulli's equation has limitations — it does not apply to turbulent flow, compressible flow at high speeds, or when there is significant viscous dissipation.",
      },
      {
        title: "Viscosity and Newton's Law of Viscous Flow",
        body:
          "Viscosity is a measure of a fluid's resistance to shear or flow. Consider a fluid between two parallel plates separated by distance dy. The lower plate is stationary, the upper plate moves with velocity v. The fluid in contact with each plate has the same velocity as the plate (no-slip condition). The velocity gradient (or shear rate) is dv/dy. The shear stress τ (force per unit area required to maintain the flow) is proportional to the shear rate: τ = η(dv/dy), where η is the coefficient of dynamic viscosity. Its SI unit is pascal-seconds (Pa·s) or poise (P) in the CGS system (1 P = 0.1 Pa·s). Water at 20°C has η ≈ 1.0 × 10⁻³ Pa·s; honey has η ≈ 2-10 Pa·s; air at 20°C has η ≈ 1.8 × 10⁻⁵ Pa·s. Fluids that obey this linear relationship are called Newtonian fluids (water, air, thin oils). Non-Newtonian fluids (ketchup, toothpaste, blood) have more complex behaviour.",
      },
      {
        title: "Stokes' Law and Terminal Velocity",
        body:
          "When a sphere moves through a viscous fluid at low speeds, the drag force opposing its motion is given by Stokes' law: F = 6πηrv, where η is the viscosity of the fluid, r is the radius of the sphere, and v is its velocity relative to the fluid. This drag force is proportional to velocity, not velocity squared (which is the case for high-speed turbulent drag). For a sphere falling under gravity through a fluid, three forces act: weight (mg = ρ_sVg) downward, buoyancy (ρ_fVg) upward, and viscous drag (6πηrv) upward. Initially, the sphere accelerates. As speed increases, drag increases until the net force becomes zero. At terminal velocity: mg = ρ_fVg + 6πηrv_t. Solving gives v_t = (2/9)(r²/η)(ρ_s - ρ_f)g. Terminal velocity is proportional to r² — a larger sphere falls much faster.",
      },
      {
        title: "Surface Tension and Surface Energy",
        body:
          "Surface tension (γ) is the force per unit length acting along the surface of a liquid, perpendicular to any line drawn on the surface. Its SI unit is N/m. It arises because molecules at the surface experience a net inward pull from the molecules below, unlike molecules in the bulk which are surrounded on all sides. The surface is like a stretched membrane — it tends to minimise its area. This is why small liquid droplets are spherical (a sphere has the smallest surface area for a given volume). Surface tension also has an equivalent definition as surface energy: the work done per unit area to increase the surface area of the liquid. γ = W/ΔA. The units N/m and J/m² are equivalent. For water at 20°C, γ ≈ 0.073 N/m. For mercury, γ ≈ 0.465 N/m.",
      },
      {
        title: "Capillary Rise and Depression",
        body:
          "When a narrow tube (capillary) is dipped into a liquid, the liquid either rises or falls inside the tube relative to the outside level. This is capillary action. If the liquid wets the tube (adhesion > cohesion, e.g. water in glass), it rises. If it does not (cohesion > adhesion, e.g. mercury in glass), it is depressed. The height of rise or depression is given by h = 2γ cosθ / (ρgr), where γ is surface tension, θ is the contact angle, ρ is density, g is gravity, and r is the tube radius. For water in glass, θ ≈ 0° (cosθ = 1), so h = 2γ/(ρgr). Notice that h ∝ 1/r — narrower tubes give greater rise. This is how plants draw water from roots to leaves through tiny xylem vessels.",
      },
      {
        title: "Excess Pressure in Drops and Bubbles",
        body:
          "Due to surface tension, the pressure inside a liquid drop or a soap bubble is higher than the pressure outside. For a spherical liquid drop with one surface, the excess pressure is ΔP = 2γ/R. For a soap bubble, which has two surfaces (inner and outer), ΔP = 4γ/R. The excess pressure is inversely proportional to the radius — smaller drops have higher internal pressure. This is why two soap bubbles of different sizes joined by a tube behave interestingly: air flows from the smaller bubble (higher pressure) to the larger bubble (lower pressure), making the larger one grow and the smaller one shrink.",
      },
      {
        title: "The Equation of Continuity",
        body:
          "The equation of continuity expresses conservation of mass in fluid flow. For an incompressible fluid flowing through a pipe of varying cross-section, the mass flow rate must be constant: ρA₁v₁ = ρA₂v₂. Since ρ is constant for incompressible flow, this simplifies to A₁v₁ = A₂v₂, or Av = constant. This means the flow speed is inversely proportional to the cross-sectional area. Where the pipe is narrow, the fluid moves faster. Where it is wide, the fluid moves slower. This is why a river flows slowly where it is wide and fast where it narrows. It also explains why a gentle squeeze on a garden hose makes the water shoot out faster.",
      },
      {
        title: "Torricelli's Law and Efflux Velocity",
        body:
          "Torricelli's law gives the speed of efflux of a fluid through a small hole at the bottom of a tank. Applying Bernoulli's equation between the free surface of the liquid (where P = P_atm, v ≈ 0, h = H) and the hole (where P = P_atm, v = v, h = 0), we get v = √(2gH). Remarkably, this is exactly the speed an object would attain if it fell freely from a height H — the fluid's potential energy is completely converted to kinetic energy. The volume flow rate through the hole is Q = A_hole × v = A_hole × √(2gH). In reality, the actual flow rate is slightly less due to the vena contracta effect (the jet contracts slightly after leaving the hole), so a coefficient of discharge (C_d ≈ 0.6-0.7) is often included.",
      },
      {
        title: "Applications of Bernoulli's Principle",
        body:
          "Bernoulli's principle has numerous real-world applications. (1) Aeroplane wing (airfoil): the curved upper surface causes air to travel faster than along the flat lower surface, creating lower pressure above and generating lift. (2) Venturi meter: a constriction in a pipe causes a pressure drop proportional to the flow speed — used to measure flow rate. (3) Atomiser and spray gun: fast-moving air over a vertical tube reduces pressure, drawing liquid up and breaking it into a fine spray. (4) Bunsen burner: gas enters through a small jet, creating a low-pressure region that draws in air through side openings for combustion. (5) Pitot tube: measures flow speed by comparing stagnation pressure with static pressure. (6) Curving balls in sports: a spinning ball drags air on one side, creating a pressure difference that curves its trajectory (Magnus effect).",
      },
      {
        title: "Reynolds Number and Flow Regimes",
        body:
          "The Reynolds number (Re) is a dimensionless quantity that predicts whether fluid flow will be laminar or turbulent. It is defined as Re = ρvL/η, where ρ is fluid density, v is flow speed, L is a characteristic length (e.g., pipe diameter), and η is dynamic viscosity. Physically, Re = (inertial forces)/(viscous forces). When viscous forces dominate (low Re), the flow is smooth and laminar. When inertial forces dominate (high Re), the flow becomes turbulent with chaotic eddies. The critical Reynolds number for flow through a pipe is about 2000 — below this, flow is typically laminar; above 3000, it is turbulent. Between 2000 and 3000 is a transition region. The Reynolds number is crucial in engineering for scaling — if two flows have the same Re, they behave similarly even if their scales are vastly different (dynamic similarity).",
      },
    ],
    keyPoints: [
      "Pressure P = F/A. In fluids, pressure acts equally in all directions.",
      "Pascal's law: pressure applied to enclosed fluid is transmitted undiminished throughout.",
      "Pressure variation with depth: P = P₀ + ρgh.",
      "Archimedes' principle: buoyant force = weight of fluid displaced.",
      "Equation of continuity: A₁v₁ = A₂v₂ (incompressible fluid).",
      "Bernoulli's equation: P + ½ρv² + ρgh = constant along a streamline.",
      "Viscosity η measures resistance to flow. Newton's law: τ = η(dv/dy).",
      "Stokes' law: drag force on a sphere F = 6πηrv.",
      "Terminal velocity: v_t = (2/9)(r²/η)(ρ_s - ρ_f)g.",
      "Surface tension γ = force per unit length along a surface.",
      "Capillary rise/depression: h = 2γ cosθ/(ρgr).",
      "Excess pressure in liquid drop: ΔP = 2γ/R. In soap bubble: ΔP = 4γ/R.",
      "Torricelli's law: v = √(2gH).",
      "Reynolds number Re = ρvL/η. Re < 2000 → laminar; Re > 3000 → turbulent.",
    ],
    importantQuestions: [
      "State Pascal's law. Explain the working of a hydraulic lift with a neat diagram. A hydraulic lift has a small piston of area 0.01 m² and a large piston of area 0.5 m². What force is needed on the small piston to lift a 1000 kg car?",
      "Derive the expression for terminal velocity of a sphere falling through a viscous fluid. How does terminal velocity depend on the radius and density of the sphere?",
      "State Bernoulli's principle. Derive Bernoulli's equation and explain any three applications from daily life.",
      "What is surface tension? Explain why (a) a needle can float on water, (b) small drops of liquid are spherical, (c) soap bubbles have excess pressure inside.",
      "Distinguish between laminar and turbulent flow. What is the physical significance of Reynolds number? Calculate the Reynolds number for water flowing at 1 m/s through a pipe of diameter 2 cm (ρ = 1000 kg/m³, η = 10⁻³ Pa·s).",
      "Derive the expression for capillary rise in a tube. A capillary tube of radius 0.5 mm is dipped in water. Find the height of water rise in the tube. Surface tension of water = 0.072 N/m, contact angle = 0°, g = 9.8 m/s².",
      "A large water tank has a small hole at a depth of 5 m below the water surface. Find the velocity of efflux of water from the hole. If the hole has an area of 1 cm², find the volume flow rate of water.",
      "Explain Archimedes' principle. A solid sphere of density 2000 kg/m³ and radius 5 cm is dropped in a liquid of density 1000 kg/m³ and viscosity 1.5 Pa·s. Find the terminal velocity of the sphere.",
    ],
  },
  "kinetic-theory-gases": {
    overview:
      "Have you ever wondered what is actually happening inside a gas? When you pump air into a bicycle tyre, the pressure increases. When you heat a sealed container, the pressure also increases. But what is pressure, really, at the microscopic level? The kinetic theory of gases answers this beautifully: it connects the macroscopic world of pressure, temperature, and volume that we can measure with instruments to the microscopic world of countless molecules zipping around in constant, random motion. It is one of the greatest intellectual achievements of physics — a bridge between the visible and the invisible.\n\nThe fundamental picture is this: a gas consists of an enormous number of molecules (about 2.7 × 10²⁵ molecules per cubic metre at room temperature and pressure) moving in all directions with a wide range of speeds. These molecules collide with each other and with the walls of the container. Each collision with a wall exerts a tiny force. Add up the forces from billions upon billions of collisions every second, and you get the macroscopic pressure we measure. The kinetic theory makes several simplifying assumptions: gas molecules are treated as point particles (their size is negligible compared to the distances between them); there are no intermolecular forces except during collisions; collisions are perfectly elastic (no kinetic energy is lost on average); and the motion is completely random.\n\nFrom these assumptions, we can derive the ideal gas equation PV = nRT, which was originally discovered experimentally. The derivation is elegant and illuminating. Consider a cubical container of side length L containing N molecules of a gas, each of mass m. A molecule moving with velocity v_x towards one wall collides, reverses its x-component of velocity, and undergoes a change in momentum of 2mv_x. The time between successive collisions with the same wall is 2L/v_x, so the force exerted by this molecule on the wall is Δp/Δt = (2mv_x)/(2L/v_x) = mv_x²/L. Summing over all N molecules and dividing by the area of the wall (L²), we get pressure P = (Nmv²_rms)/(3V). Since the average kinetic energy per molecule is (½)mv²_rms = (3/2)kT, we arrive at PV = NkT = nRT. The temperature T is nothing but a measure of the average kinetic energy of the molecules — higher temperature means faster-moving molecules.\n\nThis microscopic picture explains so much. It tells us why the pressure of a gas increases when you compress it (molecules hit the walls more frequently because they travel shorter distances between walls). It explains why heating a gas increases pressure (molecules move faster, hitting walls harder and more often). It predicts Graham's law of effusion (lighter molecules escape faster through a tiny hole). It gives us the Maxwell-Boltzmann distribution of molecular speeds, showing that not all molecules move at the same speed — some are slow, some are fast, and the distribution depends on temperature. It even explains transport phenomena like viscosity, thermal conductivity, and diffusion in gases. For real gases at high pressures or low temperatures, the assumptions break down, and we need corrections — leading to the van der Waals equation. But as a first approximation, the kinetic theory is remarkably powerful and forms the foundation of our understanding of gases.",
    concepts: [
      {
        title: "Assumptions of Kinetic Theory of Gases",
        body:
          "The kinetic theory of gases rests on several fundamental assumptions. (1) A gas consists of a large number of molecules that are identical for a given gas. (2) The molecules are in constant, random motion, moving in straight lines until they collide. (3) The size of the molecules is negligible compared to the average distance between them — they are treated as point particles. (4) There are no intermolecular forces except during collisions. (5) All collisions (molecule-molecule and molecule-wall) are perfectly elastic — total kinetic energy is conserved. (6) The duration of a collision is negligible compared to the time between collisions. (7) Newton's laws of motion apply to individual molecules. These assumptions work well for real gases at moderate pressures and temperatures, but break down near the liquefaction point.",
      },
      {
        title: "Pressure from a Molecular Perspective",
        body:
          "Pressure is the result of countless molecular collisions with the container walls. Consider N molecules in a cubical box of side L. A molecule with velocity component v_x towards a wall undergoes a momentum change of 2mv_x when it hits and rebounds. It hits the same wall every 2L/v_x seconds, so the force from this molecule is F = (2mv_x)/(2L/v_x) = mv_x²/L. Summing over all molecules and all three dimensions, the total force on one wall is Σ(mv_x²)/L = (Nm/3)(v²_avg)/L. Pressure = F/L² = (Nm/3)(v²_avg)/L³ = (1/3)(Nmv²_rms)/V. This gives P = (1/3)ρ v²_rms, where ρ is density. This derivation links the macroscopic pressure directly to the microscopic motion of molecules.",
      },
      {
        title: "The Ideal Gas Equation from Kinetic Theory",
        body:
          "From P = (1/3)(Nmv²_rms)/V and the definition of kinetic energy, we can write PV = (2/3)N(½mv²_rms) = (2/3)N⟨KE⟩, where ⟨KE⟩ is the average translational kinetic energy per molecule. Experimental observations show that PV/T is constant for a given amount of gas, so ⟨KE⟩ must be proportional to T. Defining the constant of proportionality as (3/2)k, where k is Boltzmann's constant (1.38 × 10⁻²³ J/K), we get ⟨KE⟩ = (3/2)kT and PV = NkT. Since N = nN_A (where N_A is Avogadro's number) and R = kN_A (gas constant = 8.314 J/mol·K), we obtain the familiar PV = nRT.",
      },
      {
        title: "Temperature and Molecular Kinetic Energy",
        body:
          "The kinetic theory reveals that temperature is a direct measure of the average translational kinetic energy of molecules: (1/2)mv²_rms = (3/2)kT. This means at a given temperature, all gases have the same average molecular kinetic energy regardless of their molecular mass. At 300 K, the average KE per molecule is about 6.2 × 10⁻²¹ J (or about 0.039 eV). The root-mean-square speed v_rms = √(3RT/M) depends on the molar mass — lighter molecules move faster. At the same temperature, hydrogen molecules move about 4 times faster than oxygen molecules (√(32/2) = 4).",
      },
      {
        title: "Maxwell-Boltzmann Speed Distribution",
        body:
          "Not all molecules in a gas move at the same speed. The Maxwell-Boltzmann distribution describes the probability distribution of molecular speeds at a given temperature. The distribution function f(v) = 4πN(m/(2πkT))^(3/2) v² exp(-mv²/(2kT)) gives the number of molecules with speed between v and v+dv. Three characteristic speeds: most probable speed v_p = √(2kT/m) = √(2RT/M); average speed v_avg = √(8kT/πm) = √(8RT/πM); rms speed v_rms = √(3kT/m) = √(3RT/M). These satisfy v_p : v_avg : v_rms = 1 : 1.128 : 1.225.",
      },
      {
        title: "Degrees of Freedom",
        body:
          "A degree of freedom is an independent way in which a molecule can store energy. For a monatomic gas (He, Ne, Ar), there are 3 translational degrees of freedom. For a diatomic gas (H₂, O₂, N₂), there are 3 translational, 2 rotational (about two perpendicular axes), and at high temperatures, 2 vibrational degrees of freedom. At room temperature, diatomic molecules typically have f = 5 (3 translational + 2 rotational) — the vibrational modes are frozen out because the vibrational quantum is too large to be excited at ordinary temperatures. For polyatomic gases, f can be 6 or more.",
      },
      {
        title: "Law of Equipartition of Energy",
        body:
          "The equipartition theorem states that each quadratic degree of freedom contributes an average energy of (1/2)kT per molecule (or (1/2)RT per mole). For a monatomic gas with 3 translational degrees of freedom: U = (3/2)NkT = (3/2)nRT. For a diatomic gas at moderate temperatures (5 DOF): U = (5/2)nRT. At high temperatures (7 DOF including vibration): U = (7/2)nRT. The molar specific heats follow directly: C_V = (dU/dT)_V. So for monatomic: C_V = 3R/2, for diatomic at moderate T: C_V = 5R/2, for diatomic at high T: C_V = 7R/2. The ratio γ = C_P/C_V = 1 + 2/f.",
      },
      {
        title: "Specific Heat Capacities of Gases",
        body:
          "The specific heat capacity of a gas depends on whether it is measured at constant volume (C_V) or constant pressure (C_P). At constant volume, all heat added goes into increasing internal energy. At constant pressure, the gas expands while being heated, doing work on the surroundings — so more heat is needed for the same temperature rise. Hence C_P > C_V. The relation C_P - C_V = R (per mole) holds for all ideal gases. From kinetic theory, C_V = fR/2, so C_P = (f+2)R/2, and γ = C_P/C_V = 1 + 2/f. For monatomic gases: C_V = 3R/2, C_P = 5R/2, γ = 1.67. For diatomic gases at room temperature: C_V = 5R/2, C_P = 7R/2, γ = 1.4.",
      },
      {
        title: "Mean Free Path",
        body:
          "The mean free path (λ) is the average distance a molecule travels between successive collisions. For a gas of molecules with diameter d and number density n, λ = 1/(√2 π d² n). Since n = P/(kT), we can also write λ = kT/(√2 π d² P). At STP (P = 1 atm, T = 273 K), for nitrogen with d ≈ 3.7 × 10⁻¹⁰ m, λ ≈ 68 nm — about 200 molecular diameters. The mean free path is inversely proportional to pressure — in a good vacuum (10⁻⁶ atm), λ can be several metres. This explains why vacuum chambers are needed for experiments where particles must travel long distances without collisions.",
      },
      {
        title: "Molecular Collision Frequency",
        body:
          "The collision frequency (Z) is the average number of collisions a molecule undergoes per second. If a molecule moves with average speed v_avg and has mean free path λ, then Z = v_avg/λ. For nitrogen at STP, v_avg ≈ 454 m/s and λ ≈ 68 × 10⁻⁹ m, giving Z ≈ 6.7 × 10⁹ collisions per second. The total number of collisions per unit volume per second is Z_total = (1/√2) π d² v_avg n². The incredibly high collision frequency is why gases reach equilibrium so quickly — any disturbance is rapidly smoothed out by collisions.",
      },
      {
        title: "Graham's Law of Effusion",
        body:
          "Effusion is the escape of gas molecules through a tiny hole into a vacuum. Graham's law states that the rate of effusion is inversely proportional to the square root of the molar mass: rate ∝ 1/√M. This follows directly from kinetic theory — lighter molecules move faster, so they hit the orifice more frequently. Graham's law is used to separate isotopes of uranium in the enrichment process: gaseous UF₆ containing U-235 effuses slightly faster than UF₆ containing U-238, allowing gradual enrichment over many stages.",
      },
      {
        title: "Real Gases and Van der Waals Equation",
        body:
          "Real gases deviate from ideal gas behaviour at high pressures and low temperatures. The deviations occur because: (1) Molecules have finite size — at high pressures, the volume occupied by the molecules themselves becomes significant. (2) Intermolecular attractive forces become important at close distances — they reduce the pressure. The van der Waals equation corrects for both: (P + an²/V²)(V - nb) = nRT. The term an²/V² corrects for intermolecular attractions. The term nb corrects for molecular volume. The constants a and b are experimentally determined for each gas. At low pressures and high temperatures, the correction terms become negligible.",
      },
      {
        title: "Critical Temperature and Liquefaction of Gases",
        body:
          "Below a certain temperature — the critical temperature (T_c) — a gas can be liquefied by applying sufficient pressure. Above T_c, no amount of pressure can liquefy it. The critical temperature is related to the strength of intermolecular forces — gases with strong attractions (like CO₂, T_c = 31°C) have higher critical temperatures. Gases with weak attractions (like He, T_c = -268°C) have very low critical temperatures. The van der Waals equation predicts the critical point: V_c = 3nb, P_c = a/(27b²), T_c = 8a/(27Rb).",
      },
      {
        title: "Transport Phenomena in Gases",
        body:
          "Kinetic theory also explains transport phenomena. (1) Viscosity: transfer of momentum between layers. η = (1/3)ρv_avgλ. Remarkably, η is independent of pressure (at constant temperature). (2) Thermal conductivity: transfer of heat. κ = (1/3)ρv_avgλC_V/m. Also independent of pressure. (3) Diffusion: transfer of mass. D = (1/3)v_avgλ. All three transport coefficients have the same form — (1/3) × (density) × (average speed) × (mean free path) — reflecting their common origin in molecular motion and collisions.",
      },
      {
        title: "Adiabatic Processes and the Kinetic Theory",
        body:
          "In an adiabatic process, no heat enters or leaves the system. For an ideal gas undergoing a reversible adiabatic process, PV^γ = constant, where γ = C_P/C_V. Kinetic theory provides γ based on degrees of freedom: γ = 1 + 2/f. So γ = 5/3 for monatomic, 7/5 for diatomic, and so on. During adiabatic compression, molecules collide with the moving piston and rebound with increased speed — the temperature increases. During adiabatic expansion, the opposite happens. This is why a bicycle pump gets hot when you compress air rapidly.",
      },
    ],
    keyPoints: [
      "Kinetic theory: large number of molecules in random motion with perfectly elastic collisions.",
      "Pressure arises from molecular collisions: P = (1/3)(Nmv²_rms)/V = (1/3)ρv²_rms.",
      "Temperature measures average molecular KE: (1/2)mv²_rms = (3/2)kT.",
      "Ideal gas equation PV = nRT = NkT is derivable from kinetic theory.",
      "v_rms = √(3RT/M). Lighter molecules move faster at the same temperature.",
      "Maxwell-Boltzmann distribution describes range of molecular speeds.",
      "Degrees of freedom: monatomic f=3, diatomic f=5 (at moderate T).",
      "Equipartition: each DOF contributes ½kT. U = (f/2)nRT.",
      "Molar specific heats: C_V = fR/2, C_P = (f+2)R/2, γ = 1 + 2/f.",
      "C_P - C_V = R for all ideal gases.",
      "Mean free path λ = 1/(√2πd²n) = kT/(√2πd²P).",
      "Collision frequency Z ≈ 7 × 10⁹ s⁻¹ for air at STP.",
      "Graham's law: rate of effusion ∝ 1/√M.",
      "Van der Waals equation: (P + an²/V²)(V - nb) = nRT.",
      "Critical temperature: above it, gas cannot be liquefied.",
      "Transport coefficients (η, κ, D) ≈ (1/3)ρv_avgλ. Viscosity independent of pressure.",
    ],
    importantQuestions: [
      "Derive the expression for pressure exerted by an ideal gas using the kinetic theory of gases.",
      "Using kinetic theory, derive the ideal gas equation PV = nRT. Show that average KE = (3/2)kT.",
      "Calculate the rms speed of oxygen molecules at 27°C. Molar mass of oxygen = 32 g/mol. What would be the rms speed of hydrogen at the same temperature?",
      "State the law of equipartition of energy. Use it to calculate molar specific heats for monatomic, diatomic, and polyatomic gases.",
      "What is the Maxwell-Boltzmann distribution of molecular speeds? Explain the significance of most probable, average, and rms speeds.",
      "Derive the expression for mean free path of a gas molecule. How does it depend on temperature and pressure?",
      "Explain the deviations of real gases from ideal gas behaviour. State the van der Waals equation and explain the significance of a and b.",
      "What is the critical temperature of a gas? Using the van der Waals equation, derive expressions for critical constants P_c, V_c, and T_c.",
    ],
  },
  "thermodynamics": {
    overview:
      "Thermodynamics is the science of energy — how it flows, how it transforms, and why certain processes happen spontaneously while others never do. It governs everything from the cooling of a cup of tea to the operation of a nuclear power plant, from the metabolism in your body to the formation of stars. At its heart, thermodynamics is about three things: energy, entropy, and equilibrium. And despite dealing with some of the most profound concepts in physics, its principles can be stated with remarkable simplicity.\n\nThe story begins with the zeroth law of thermodynamics. It sounds trivial: if body A is in thermal equilibrium with body B, and body B is in thermal equilibrium with body C, then A is in thermal equilibrium with C. But this simple statement is the foundation of temperature measurement. It justifies using a thermometer: when the thermometer (B) reaches equilibrium with your body (A), and it was calibrated against a standard (C), the reading from C tells you about A. Without the zeroth law, the concept of temperature would not be well-defined.\n\nThe first law of thermodynamics is the law of conservation of energy, extended to include heat. It states that energy can neither be created nor destroyed, only converted from one form to another. Mathematically: ΔU = Q - W, where ΔU is the change in internal energy of a system, Q is the heat added to the system, and W is the work done by the system on its surroundings. The first law tells us that if you add heat to a gas in a cylinder with a movable piston, the gas can respond in two ways: it can get hotter (increase internal energy) or it can expand (do work by pushing the piston outward), or a combination of both.\n\nBut the first law does not tell us which processes are possible. You could imagine heat flowing from a cold cup to a hot room, cooling the cup further and heating the room more — that would conserve energy, so the first law would not forbid it. But it never happens. This is where the second law comes in. The second law introduces the concept of entropy — a measure of disorder. The total entropy of an isolated system always increases in a spontaneous process. Heat flows from hot to cold because that increases entropy. A gas expands to fill a container because that increases entropy. The second law sets the direction of time — it is why you can unscramble an egg (theoretically, with enough energy) but never see one spontaneously unscramble. The second law also limits the efficiency of heat engines — even an ideal engine cannot convert all heat into work. Some heat must always be rejected to a cold reservoir.",
    concepts: [
      {
        title: "Thermal Equilibrium and the Zeroth Law",
        body:
          "The zeroth law of thermodynamics establishes the concept of temperature. Two systems are in thermal equilibrium when there is no net heat flow between them. The zeroth law states that if A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. This transitivity allows temperature to be defined and measured. Thermometers work by bringing a small system (mercury in a glass tube, or a thermocouple) into contact with the system of interest. When thermal equilibrium is reached, the thermometer reading gives a number that correlates with the temperature.",
      },
      {
        title: "Internal Energy and the First Law",
        body:
          "Internal energy (U) is the total energy stored within a system. For an ideal gas, it is entirely kinetic — the sum of the translational, rotational, and vibrational energies of all molecules. For monatomic ideal gases, U = (3/2)nRT; it depends only on temperature. The first law of thermodynamics states: ΔU = Q - W. Here Q is positive when heat enters the system, and W is positive when the system does work on its surroundings. The first law is a statement of energy conservation. It does not tell us whether a process will occur — only that if it does occur, energy will be conserved.",
      },
      {
        title: "Quasi-Static and Reversible Processes",
        body:
          "A quasi-static process is one that occurs infinitely slowly, so the system passes through a continuous series of equilibrium states. A reversible process is a quasi-static process with no dissipative effects (no friction, no viscosity, no turbulence). In a reversible process, the system and its surroundings can be returned to their initial states by reversing the process without any net change in the universe. All real processes are irreversible to some degree. Reversible processes are idealisations that set the upper limit on efficiency.",
      },
      {
        title: "Isochoric Process (Constant Volume)",
        body:
          "In an isochoric process, the volume remains constant. Since W = ∫ P dV = 0, the first law gives ΔU = Q_V. All heat added goes into increasing the internal energy. For an ideal gas, Q = nC_VΔT. An isochoric process on a P-V diagram appears as a vertical line. Examples include heating a gas in a rigid sealed container, or the combustion stroke in an internal combustion engine just before the piston moves.",
      },
      {
        title: "Isobaric Process (Constant Pressure)",
        body:
          "In an isobaric process, the pressure remains constant. The work done is W = PΔV. The first law gives ΔU = Q_P - PΔV. The heat absorbed is Q_P = nC_PΔT. Since C_P > C_V, the relation C_P - C_V = R holds for ideal gases. On a P-V diagram, an isobaric process is a horizontal line. Examples include heating a gas in a cylinder with a movable piston, or boiling water at constant atmospheric pressure.",
      },
      {
        title: "Isothermal Process (Constant Temperature)",
        body:
          "In an isothermal process, the temperature remains constant. For an ideal gas, ΔU = 0, so Q = W. The work done in an isothermal expansion from V_i to V_f is W = nRT ln(V_f/V_i). The P-V curve for an isothermal process is a rectangular hyperbola (PV = constant). Isothermal processes must be carried out slowly to allow heat exchange with a reservoir to maintain constant temperature.",
      },
      {
        title: "Adiabatic Process (No Heat Exchange)",
        body:
          "In an adiabatic process, Q = 0 — no heat enters or leaves the system. From the first law, ΔU = -W: the work done by the system comes at the expense of its internal energy, causing the temperature to drop. For an ideal gas undergoing a reversible adiabatic process, PV^γ = constant, TV^(γ-1) = constant, and TP^((1-γ)/γ) = constant, where γ = C_P/C_V. The work done is W = (P_iV_i - P_fV_f)/(γ - 1). On a P-V diagram, the adiabatic curve is steeper than the isothermal curve.",
      },
      {
        title: "Cyclic Processes and the First Law",
        body:
          "In a cyclic process, the system returns to its initial state after completing a series of steps. Since U is a state function, ΔU = 0 over a complete cycle. From the first law: Q_net = W_net — the net heat added equals the net work done. On a P-V diagram, a cyclic process forms a closed loop, and the area enclosed by the loop equals the net work done. If the cycle is traversed clockwise, net work is done by the system (heat engine).",
      },
      {
        title: "Heat Engines",
        body:
          "A heat engine is a device that converts thermal energy into mechanical work. It operates in a cycle: (1) absorbs heat Q₁ from a hot reservoir at T₁, (2) does useful work W, (3) rejects waste heat Q₂ to a cold reservoir at T₂. The thermal efficiency η = W/Q₁ = (Q₁ - Q₂)/Q₁ = 1 - Q₂/Q₁. Real heat engines include steam engines, internal combustion engines, gas turbines, and Stirling engines. Typical efficiencies: petrol engine 25-30%, diesel engine 30-40%, large steam turbines 40-48%.",
      },
      {
        title: "The Carnot Cycle and Carnot Engine",
        body:
          "The Carnot cycle is the most efficient possible heat engine cycle operating between two fixed temperatures. It consists of four reversible processes: (1) Isothermal expansion at T₁, (2) Adiabatic expansion (temperature drops to T₂), (3) Isothermal compression at T₂, (4) Adiabatic compression (temperature rises back to T₁). The efficiency of a Carnot engine is η_Carnot = 1 - T₂/T₁ (temperatures in Kelvin). This depends only on the reservoir temperatures, not on the working substance. No real engine can exceed this efficiency.",
      },
      {
        title: "The Second Law of Thermodynamics",
        body:
          "The second law can be stated in several equivalent ways. Kelvin-Planck statement: it is impossible to construct a heat engine that operates in a cycle and converts all heat input into work. Clausius statement: it is impossible to construct a refrigerator that transfers heat from a cold body to a hot body without work input. These statements are logically equivalent. The second law explains why processes have a preferred direction: heat flows from hot to cold, not vice versa; gases expand to fill containers; ordered structures tend toward disorder.",
      },
      {
        title: "Entropy — A Measure of Disorder",
        body:
          "Entropy (S) is a state function that measures disorder. For a reversible process, dS = dQ_rev/T. For an irreversible process, dS > dQ/T. The second law can be restated as: the total entropy of an isolated system never decreases — ΔS_universe ≥ 0. When heat flows from a hot reservoir at T₁ to a cold reservoir at T₂, ΔS_hot = -Q/T₁, ΔS_cold = +Q/T₂, and ΔS_total = Q(1/T₂ - 1/T₁) > 0. Statistical mechanics: S = k ln W, where W is the number of microscopic configurations. More arrangements = higher entropy.",
      },
      {
        title: "Entropy Changes in Thermodynamic Processes",
        body:
          "For an ideal gas undergoing a reversible process: ΔS = nC_V ln(T₂/T₁) + nR ln(V₂/V₁). For isothermal: ΔS = nR ln(V₂/V₁). For isochoric: ΔS = nC_V ln(T₂/T₁). For isobaric: ΔS = nC_P ln(T₂/T₁). For phase changes at constant temperature: ΔS = Q_rev/T = L/T, where L is latent heat. Entropy is a state function — it depends only on initial and final states, not on the path.",
      },
      {
        title: "Refrigerators and Heat Pumps",
        body:
          "A refrigerator uses work W to extract heat Q₂ from a cold reservoir and rejects heat Q₁ = Q₂ + W to a hot reservoir. The coefficient of performance (COP) of a refrigerator is COP_ref = Q₂/W. For a Carnot refrigerator: COP_Carnot = T₂/(T₁ - T₂). A heat pump extracts heat from a cold outside and delivers it to a warm interior. COP_HP = Q₁/W = T₁/(T₁ - T₂). Heat pumps are more efficient than electric resistance heaters because they move heat rather than generating it.",
      },
      {
        title: "The Third Law of Thermodynamics",
        body:
          "The third law states that the entropy of a perfect crystalline substance approaches zero as the temperature approaches absolute zero (0 K). Consequences: (1) It is impossible to reach absolute zero in a finite number of steps. (2) The specific heat capacity of all substances approaches zero as T → 0 K. (3) The thermal expansion coefficient also approaches zero at absolute zero. (4) It allows the calculation of absolute entropies from heat capacity data.",
      },
      {
        title: "Thermodynamic Potentials and Free Energy",
        body:
          "Thermodynamic potentials help predict spontaneity. Enthalpy H = U + PV: ΔH = Q_P at constant pressure. Helmholtz free energy F = U - TS: ΔF < 0 for spontaneous processes at constant T and V. Gibbs free energy G = H - TS: ΔG < 0 for spontaneous processes at constant T and P. A reaction with ΔG < 0 is spontaneous (exergonic); ΔG > 0 is non-spontaneous; ΔG = 0 is at equilibrium.",
      },
      {
        title: "Heat Conduction and Thermodynamics",
        body:
          "Heat conduction is given by Fourier's law: dQ/dt = -kA(dT/dx), where k is thermal conductivity. The minus sign indicates heat flows from hot to cold (consistent with the second law). Thermal conductivity varies widely: metals like copper (k ≈ 400 W/m·K) conduct well, while insulators like wood (k ≈ 0.1 W/m·K) conduct poorly. Heat conduction is an irreversible process that generates entropy.",
      },
    ],
    keyPoints: [
      "Zeroth law: thermal equilibrium is transitive. Basis of temperature measurement.",
      "First law: ΔU = Q - W. Energy is conserved.",
      "Internal energy of ideal gas depends only on temperature: U = (f/2)nRT.",
      "Isochoric: W = 0, ΔU = Q = nC_VΔT.",
      "Isobaric: W = PΔV, Q_P = nC_PΔT. C_P - C_V = R.",
      "Isothermal: ΔU = 0, Q = W = nRT ln(V_f/V_i).",
      "Adiabatic: Q = 0, PV^γ = constant, TV^(γ-1) = constant.",
      "Cyclic process: ΔU = 0, Q_net = W_net.",
      "Heat engine efficiency: η = 1 - Q_out/Q_in.",
      "Carnot efficiency: η_max = 1 - T₂/T₁.",
      "Second law (Kelvin-Planck): cannot convert all heat to work in a cycle.",
      "Second law (Clausius): cannot move heat from cold to hot without work.",
      "Entropy: dS = dQ_rev/T. ΔS_universe ≥ 0.",
      "Entropy change for ideal gas: ΔS = nC_V ln(T₂/T₁) + nR ln(V₂/V₁).",
      "Refrigerator COP: Q₂/W. Carnot COP = T₂/(T₁ - T₂).",
      "Third law: S → 0 as T → 0 K. Absolute zero is unattainable.",
      "Gibbs free energy: ΔG = ΔH - TΔS. ΔG < 0 for spontaneous processes.",
    ],
    importantQuestions: [
      "State and explain the first law of thermodynamics. Derive work, heat, and internal energy change for isothermal, adiabatic, isochoric, and isobaric processes.",
      "Explain the Carnot cycle with a neat diagram. Derive the expression for efficiency of a Carnot engine. Why is 100% efficiency impossible?",
      "State the second law of thermodynamics in both Kelvin-Planck and Clausius forms. Show that they are equivalent.",
      "What is entropy? Derive the expression for entropy change of an ideal gas. Calculate entropy change when 1 mole of ideal gas expands isothermally from 10 L to 20 L at 300 K.",
      "Explain the working of a refrigerator. Derive its COP. A Carnot refrigerator operates between -3°C and 27°C. Find its COP.",
      "State the third law of thermodynamics. Explain why absolute zero is unattainable.",
      "Distinguish between reversible and irreversible processes. Why is entropy change of the universe always positive for irreversible processes?",
      "What is Gibbs free energy? Derive ΔG = ΔH - TΔS. A reaction has ΔH = +50 kJ/mol and ΔS = +100 J/mol·K. At what temperature does it become spontaneous?",
    ],
  },
  "oscillations": {
    overview:
      "The world is full of things that go back and forth — a swinging pendulum, a vibrating guitar string, a bouncing spring, the swaying of a tall building in the wind, even the alternating current that powers your home. These repetitive motions are oscillations, and the simplest, most fundamental type is simple harmonic motion (SHM). Understanding oscillations is not just about pendulums and springs — it is a gateway to understanding waves, sound, light, alternating currents, and even quantum mechanics.\n\nSimple harmonic motion occurs when the restoring force on an object is directly proportional to its displacement from equilibrium and acts in the opposite direction. Mathematically: F = -kx. This is Hooke's law, but it describes much more than springs. A pendulum swinging through small angles, a molecule vibrating in a crystal, a tuning fork — all follow SHM for small displacements. The 'simple' in SHM refers to the fact that the motion can be described by a single sine or cosine function. The 'harmonic' part comes from the connection to musical harmony — pure tones are sinusoidal oscillations.\n\nThe key quantities describing SHM are: amplitude (A) — the maximum displacement; angular frequency (ω) — how fast the oscillation occurs (ω = 2πf); period (T) — the time for one complete oscillation (T = 1/f = 2π/ω); and phase (φ) — where in the cycle the motion starts. The displacement as a function of time is x(t) = A sin(ωt + φ). The velocity is v(t) = Aω cos(ωt + φ), and the acceleration is a(t) = -ω²x. At the extremes (x = ±A), velocity is zero and acceleration is maximum. At equilibrium (x = 0), velocity is maximum and acceleration is zero.\n\nEnergy in SHM constantly changes form. When the mass passes through equilibrium, all energy is kinetic. At the extremes, all energy is potential. The total energy E = ½kA² is constant. Real oscillators lose energy to friction — these are damped oscillations. If we push the oscillator periodically at just the right frequency, we get resonance — the amplitude grows dramatically. Resonance can be beautiful (a singer shattering a glass) or destructive (a bridge collapsing in the wind). From the swing in a playground to the tuning of a radio, oscillations are the heartbeat of the physical world.",
    concepts: [
      {
        title: "Periodic Motion and Oscillations",
        body:
          "Periodic motion is any motion that repeats itself at regular intervals. The time for one complete repetition is the period T, and the number of repetitions per unit time is the frequency f = 1/T. Oscillatory motion is a special type of periodic motion where a body moves back and forth about a mean (equilibrium) position. Examples include a pendulum swinging, a mass on a spring, a vibrating tuning fork, and the pistons in an engine. Not all periodic motion is oscillatory — uniform circular motion is periodic but not oscillatory.",
      },
      {
        title: "Simple Harmonic Motion — Definition and Equation",
        body:
          "Simple harmonic motion (SHM) occurs when the restoring force is directly proportional to the displacement from equilibrium and acts in the opposite direction: F = -kx. Using Newton's second law, ma = -kx, or d²x/dt² + (k/m)x = 0. This is the differential equation of SHM. Its general solution is x(t) = A sin(ωt + φ) or x(t) = A cos(ωt + φ), where ω = √(k/m) is the angular frequency. The solution is sinusoidal — a smooth, continuous wave.",
      },
      {
        title: "Amplitude, Angular Frequency, Phase, Period, and Frequency",
        body:
          "Amplitude (A) is the maximum displacement from equilibrium. Angular frequency ω = 2π/T = 2πf, measured in rad/s. Frequency f is the number of complete oscillations per second (hertz). Period T = 1/f = 2π/ω. Phase (φ) determines where in the cycle the motion starts at t = 0. If φ = 0, motion starts at equilibrium moving positively. Phase difference between two oscillations determines whether they reinforce or cancel.",
      },
      {
        title: "Velocity and Acceleration in SHM",
        body:
          "Given x(t) = A sin(ωt + φ), v = dx/dt = Aω cos(ωt + φ), and a = dv/dt = -Aω² sin(ωt + φ) = -ω²x. Key features: (1) Velocity leads displacement by π/2. When x = 0, v is maximum (±Aω). When x = ±A, v = 0. (2) Acceleration is opposite in phase to displacement (π out of phase). (3) v_max = Aω, a_max = Aω². (4) v = ±ω√(A² − x²).",
      },
      {
        title: "Energy in Simple Harmonic Motion",
        body:
          "Potential energy U = ½kx² = ½kA² sin²(ωt + φ). Kinetic energy K = ½mv² = ½kA² cos²(ωt + φ). Total energy E = K + U = ½kA² — constant. At any position, v = ±ω√(A² − x²). Average KE over one cycle equals average PE, each equal to ¼kA². The total energy is proportional to the square of the amplitude.",
      },
      {
        title: "The Spring-Block System",
        body:
          "A mass m attached to a spring of force constant k executes SHM with ω = √(k/m), f = (1/2π)√(k/m), and T = 2π√(m/k). The period increases with mass and decreases with spring stiffness. The period is independent of amplitude. For a vertical spring, gravity shifts equilibrium but does not change the period. Springs in series: 1/k_eff = 1/k₁ + 1/k₂. Springs in parallel: k_eff = k₁ + k₂.",
      },
      {
        title: "The Simple Pendulum",
        body:
          "A simple pendulum with a point mass bob and massless string. For small angular displacements (θ < 15°), the restoring torque τ = -mgL sinθ ≈ -mgLθ. Using τ = Iα = mL²α, we get d²θ/dt² + (g/L)θ = 0, giving ω = √(g/L) and T = 2π√(L/g). The period is independent of mass and amplitude (for small angles). Pendulums are used in timekeeping.",
      },
      {
        title: "The Compound (Physical) Pendulum",
        body:
          "A compound pendulum is any rigid body free to oscillate about a horizontal axis not through its centre of mass. T = 2π√(I/(Mgd)), where d is the distance from pivot to centre of mass. Using the parallel axis theorem, I = I_cm + Md². The equivalent length of a simple pendulum with the same period is L_eq = I/(Md). Kater's reversible pendulum uses this for precise measurement of g.",
      },
      {
        title: "Oscillations of a Liquid in a U-Tube",
        body:
          "A liquid column in a U-tube, when disturbed, executes SHM. If displaced by h in one arm, the restoring force F = -(ρA)(2h)g. The mass of the liquid column is m = ρAL, where L is the total length. Using F = ma: d²h/dt² + (2g/L)h = 0, giving ω = √(2g/L) and T = 2π√(L/(2g)). This is analogous to a spring-mass system.",
      },
      {
        title: "Damped Oscillations",
        body:
          "Real oscillators experience damping forces F_d = -bv. The equation: m(d²x/dt²) + b(dx/dt) + kx = 0. Underdamping (b² < 4mk): x(t) = A₀e^(-bt/2m) cos(ω_d t + φ), where ω_d = √(ω₀² − (b/2m)²). Critical damping (b² = 4mk): fastest return to equilibrium without oscillation. Overdamping (b² > 4mk): slow return to equilibrium. Car shock absorbers use critical damping.",
      },
      {
        title: "Quality Factor and Logarithmic Decrement",
        body:
          "Quality factor Q = ω₀m/b = 2π × (energy stored)/(energy lost per cycle). A high-Q oscillator (tuning fork, Q ≈ 1000) rings for many cycles. Logarithmic decrement δ = ln(A_n/A_{n+1}) = bT/2m ≈ π/Q for high Q. Energy decays as E(t) = E₀e^(-ω₀t/Q). Relaxation time τ = m/b is the time for amplitude to drop to 1/e of its initial value.",
      },
      {
        title: "Forced Oscillations and Resonance",
        body:
          "An external periodic force F(t) = F₀ cos(ωt) drives the oscillator. Steady-state amplitude A = F₀/√((k − mω²)² + (bω)²). At ω = ω₀ = √(k/m), resonance occurs — amplitude is maximum. Sharper peak for higher Q. At resonance, phase difference δ = 90°. Resonance is used in radio tuning, musical instruments, microwave ovens, and MRI.",
      },
      {
        title: "Applications of SHM — Timekeeping and Metrology",
        body:
          "Pendulum clocks use SHM isochronism. Quartz watches use a vibrating quartz crystal at 32,768 Hz. Seismometers use a mass-spring system to measure ground motion. Atomic clocks use cesium-133 oscillations at 9,192,631,770 Hz to define the second. The metre is defined via the speed of light and the second, so timekeeping underpins length measurement.",
      },
      {
        title: "Angular SHM and Torsional Pendulum",
        body:
          "Angular SHM occurs when τ = -κθ (restoring torque proportional to angular displacement). For a torsional pendulum, I(d²θ/dt²) = -κθ, giving ω = √(κ/I) and T = 2π√(I/κ). This is directly analogous to the spring-mass system. Torsional pendulums are used in mechanical watches and for measuring moment of inertia.",
      },
      {
        title: "Combining SHMs — Lissajous Figures",
        body:
          "When a particle is subjected to two perpendicular SHMs, it traces Lissajous figures. If ω₁ = ω₂ and phase difference = 0, the figure is a straight line. For phase π/2, it is a circle (if amplitudes equal) or an ellipse. For other frequency ratios (1:2, 2:3), intricate patterns emerge. Used to measure unknown frequencies on an oscilloscope.",
      },
    ],
    keyPoints: [
      "SHM: restoring force proportional to displacement, F = -kx.",
      "General equation: x(t) = A sin(ωt + φ) or x(t) = A cos(ωt + φ).",
      "Angular frequency ω = √(k/m). For a pendulum: ω = √(g/L).",
      "Period T = 2π/ω = 2π√(m/k). Frequency f = 1/T.",
      "Velocity in SHM: v = Aω cos(ωt + φ). v_max = Aω. v = ±ω√(A² − x²).",
      "Acceleration: a = -ω²x. a_max = Aω².",
      "Total energy: E = ½kA² = constant. K_avg = U_avg = E/2.",
      "Simple pendulum: T = 2π√(L/g). Independent of mass and amplitude (small angles).",
      "Compound pendulum: T = 2π√(I/(Mgd)).",
      "Springs in series: 1/k_eff = 1/k₁ + 1/k₂. Parallel: k_eff = k₁ + k₂.",
      "Damped oscillations: amplitude decays as e^(-bt/2m).",
      "Critical damping: b² = 4mk.",
      "Resonance: ω_driving = ω₀ gives maximum amplitude.",
      "Quality factor Q = ω₀m/b = 2π × energy stored/energy lost per cycle.",
      "Torsional pendulum: T = 2π√(I/κ). τ = -κθ.",
    ],
    importantQuestions: [
      "Define SHM. Derive the differential equation for SHM and show that x = A sin(ωt + φ) satisfies it.",
      "A particle executes SHM of amplitude A. At what displacement is its KE equal to its PE? Derive.",
      "Derive the expression for time period of a simple pendulum. How does it change if length is increased by 44%?",
      "Explain damped oscillations. Derive amplitude as a function of time in the underdamped case. Condition for critical damping?",
      "What is resonance in forced oscillations? Explain with amplitude vs frequency graph. Two examples each of constructive and destructive resonance.",
      "A block of mass 0.5 kg is attached to a spring of force constant 50 N/m. The block is pulled 4 cm from equilibrium and released. Find period, maximum speed, total energy, and speed at displacement 2 cm.",
      "Derive expression for period of a compound pendulum. A uniform rod of length 1 m is suspended from one end. Find its period of oscillation (g = 9.8 m/s²).",
      "A particle is subjected to two perpendicular SHMs: x = A sin(ωt) and y = A sin(ωt + π/2). Find the resultant path.",
    ],
  },
  "superposition-waves": {
    overview:
      "Waves are everywhere — sound waves carrying music to your ears, light waves bringing images to your eyes, water waves rippling across a pond. One of the most remarkable things about waves is what happens when they meet: they simply add together. This is the principle of superposition, and it leads to some of the most beautiful and useful phenomena in physics — interference, beats, standing waves, and diffraction. When two waves meet, they pass right through each other as if the other were not there, and at each point the net displacement is the sum of the individual displacements.\n\nThe principle of superposition is simple to state but rich in consequences. When waves add constructively, crest meets crest and trough meets trough, resulting in a larger wave. When they add destructively, crest meets trough and they cancel. Between these extremes, any intermediate combination is possible. This superposition is not a special property of waves — it is a mathematical consequence of linear differential equations.\n\nInterference is the most direct consequence of superposition. When two coherent sources produce waves, the resulting pattern has regions of constructive and destructive interference. The condition for constructive interference is path difference = nλ. For destructive: path difference = (n + ½)λ. Thomas Young's double-slit experiment (1801) was the classic proof that light is a wave. Standing waves are another beautiful consequence — when a wave reflects from a boundary and interferes with itself, the result is a stationary pattern with nodes and antinodes.\n\nThe Doppler effect — the change in frequency due to relative motion — applies to all waves and explains why an ambulance siren sounds different as it passes. From musical harmony to medical ultrasound, from the colours of soap bubbles to the design of concert halls, the principles of wave superposition shape our world.",
    concepts: [
      {
        title: "The Principle of Superposition",
        body:
          "The principle of superposition states that when two or more waves overlap, the resultant displacement is the algebraic sum of the individual displacements: y_resultant = y₁ + y₂ + y₃ + ... This applies to all types of waves — mechanical and electromagnetic. The principle holds because the wave equation is linear. After the waves pass through each other, each continues exactly as before. This is uniquely wavelike — particles scatter, but waves pass through unchanged.",
      },
      {
        title: "Coherent Sources and Interference Conditions",
        body:
          "For stable interference, sources must be coherent — constant phase relationship. Two independent bulbs are not coherent. Coherent sources are produced by splitting a single wavefront (Young's double slits) or splitting amplitude (thin film interference). Conditions: (1) Sources must be coherent. (2) Same frequency and wavelength. (3) Comparable amplitudes. (4) Path difference ≤ coherence length. Constructive: path diff = nλ. Destructive: path diff = (n + ½)λ.",
      },
      {
        title: "Young's Double-Slit Experiment",
        body:
          "Young's double-slit experiment provided the first experimental proof that light is a wave. Light passes through two narrow parallel slits, creating two coherent sources. The waves interfere on a screen, producing alternating bright and dark fringes. Fringe width β = λD/d. The intensity follows I = 4I₀ cos²(πd sinθ/λ). The central fringe is bright. The experiment also works with electrons and neutrons, demonstrating universal wave-particle duality.",
      },
      {
        title: "Conditions for Sustained Interference",
        body:
          "For sustained interference: (1) Sources must be coherent. (2) Same frequency. (3) Amplitudes comparable. (4) Narrow sources. (5) Source separation comparable to wavelength. (6) Monochromatic light preferred — white light produces coloured fringes that overlap. In practice, coherence is achieved using lasers or by dividing the wavefront from a single source using slits.",
      },
      {
        title: "Thin Film Interference",
        body:
          "Light reflects from top and bottom surfaces of a thin film (soap bubble, oil slick). The path difference between reflected waves is 2μt cos r. An additional π phase change occurs when light reflects from a denser medium. Constructive interference: 2μt cos r = (n + ½)λ. The rainbow colours of soap bubbles arise because different wavelengths interfere constructively at different thicknesses.",
      },
      {
        title: "Beats — Interference in Time",
        body:
          "Beats occur when two waves of slightly different frequencies are superposed. The resultant amplitude varies slowly: y = 2A cos((ω₁ − ω₂)t/2) sin((ω₁ + ω₂)t/2). Beat frequency f_beat = |f₁ − f₂|. Applications: tuning musical instruments (beats disappear when in tune), detecting small frequency differences, heterodyne detection in radio.",
      },
      {
        title: "Standing Waves on a String",
        body:
          "When a wave reflects from a fixed end, it is inverted (π phase change). Incident and reflected waves interfere to form a standing wave: y = 2A sin(kx) cos(ωt). Nodes (sin(kx) = 0) are permanently at rest; antinodes (|sin(kx)| = 1) have maximum displacement. For a string fixed at both ends: L = nλ/2, f_n = nv/(2L) = nf₁. The harmonic series: f₁, 2f₁, 3f₁, ...",
      },
      {
        title: "Vibrations of Air Columns — Open and Closed Pipes",
        body:
          "Open pipe (both ends open): both ends are antinodes. L = nλ/2, f_n = nv/(2L) — all harmonics present. Closed pipe (one end closed): closed end is node, open is antinode. L = (2n−1)λ/4, f_n = (2n−1)v/(4L) — only odd harmonics. The fundamental of a closed pipe is half that of an open pipe of the same length. End correction: effective length = L + 0.6R.",
      },
      {
        title: "Harmonics and Overtones",
        body:
          "The fundamental (first harmonic) is the lowest frequency. Higher frequencies are overtones. In a string or open pipe, the nth harmonic has frequency n× fundamental. In a closed pipe, only odd harmonics exist — first overtone is third harmonic. The timbre of a musical sound depends on which overtones are present. A flute sounds different from a clarinet due to different harmonic content.",
      },
      {
        title: "Resonance in Air Columns",
        body:
          "An air column resonates when driving frequency matches a natural frequency. In a resonance tube experiment, first resonance at L₁ = λ/4, second at L₂ = 3λ/4. λ = 2(L₂ − L₁), speed of sound v = fλ = 2f(L₂ − L₁). With end correction: L₁ + e = λ/4, L₂ + e = 3λ/4. Speed of sound in air at 0°C is about 331 m/s, increasing by 0.6 m/s per °C.",
      },
      {
        title: "Characteristics of Musical Sound",
        body:
          "Musical sounds are characterised by: (1) Pitch — determined by fundamental frequency (20 Hz to 20,000 Hz for human ear). (2) Loudness — related to intensity in decibels: β = 10 log(I/I₀), where I₀ = 10⁻¹² W/m². (3) Quality (timbre) — determined by overtones. (4) Duration. These characteristics let us distinguish different instruments playing the same note.",
      },
      {
        title: "Doppler Effect in Sound",
        body:
          "The Doppler effect is the apparent change in frequency due to relative motion. f_obs = f_src(v ± v_obs)/(v ∓ v_src). Approaching source → higher frequency. Receding source → lower frequency. When source speed exceeds wave speed, a sonic boom occurs (Mach cone, sinθ = 1/M). The Doppler effect also applies to light (redshift/blueshift) and is used to measure the expansion of the universe.",
      },
      {
        title: "Wave Speed on a Stretched String",
        body:
          "The speed of a transverse wave on a stretched string is v = √(T/μ), where T is tension and μ = mass per unit length. Doubling tension increases speed by √2. Heavier strings (higher μ) produce lower notes. The fundamental frequency f₁ = v/(2L) = (1/2L)√(T/μ). Tightening a guitar string raises the pitch.",
      },
      {
        title: "Reflection and Transmission of Waves at Boundaries",
        body:
          "When a wave encounters a boundary, part is reflected and part transmitted. Reflection at a fixed end is inverted (π phase change); at a free end, it is not inverted. For sound, reflection at a closed end occurs without phase change for pressure waves. The amplitude of the reflected wave depends on impedance mismatch between the two media.",
      },
      {
        title: "Energy Transport and Intensity of Waves",
        body:
          "Waves transport energy. Power on a string: P = ½μω²A²v. Intensity I = P/A. For spherical waves from a point source: I ∝ 1/r², A ∝ 1/r. Decibel scale: β = 10 log(I/I₀) dB. A 10 dB increase = 10× intensity. Normal conversation: 60 dB. Threshold of pain: 120 dB. Prolonged exposure above 85 dB can damage hearing.",
      },
    ],
    keyPoints: [
      "Principle of superposition: resultant displacement = sum of individual displacements.",
      "Coherent sources maintain constant phase difference.",
      "Young's double-slit: fringe width β = λD/d.",
      "Intensity in double-slit: I = 4I₀ cos²(πd sinθ/λ).",
      "Thin film interference: path difference = 2μt cos r.",
      "Beats: f_beat = |f₁ − f₂|.",
      "Standing waves: y = 2A sin(kx) cos(ωt).",
      "String fixed at both ends: L = nλ/2, f_n = nv/(2L).",
      "Open pipe: all harmonics. Closed pipe: only odd harmonics.",
      "End correction: ~0.6R for open ends.",
      "Wave speed on string: v = √(T/μ).",
      "Resonance occurs at natural frequencies.",
      "Doppler effect: f_obs = f_src(v ± v_obs)/(v ∓ v_src).",
      "Sonic boom: Mach cone, sinθ = 1/M.",
      "Intensity: I ∝ 1/r² for spherical waves.",
      "Decibel scale: β = 10 log(I/I₀), I₀ = 10⁻¹² W/m².",
    ],
    importantQuestions: [
      "State the principle of superposition. Explain how it leads to beats. Derive beat frequency.",
      "Describe Young's double-slit experiment. Derive fringe width. Slits 0.1 mm apart, screen 1 m away, third bright fringe at 1.8 cm from centre. Find wavelength.",
      "Distinguish between progressive and stationary waves. Explain standing waves on a string fixed at both ends. Derive frequencies of different modes.",
      "Explain resonance tube experiment. A tuning fork of 512 Hz gives first resonance at 16.5 cm and second at 50.5 cm. Find speed of sound and end correction.",
      "What is the Doppler effect? Derive apparent frequency when source moves towards stationary observer. Train approaching at 30 m/s sounds whistle at 500 Hz. Frequency heard? (v = 340 m/s)",
      "Compare open and closed organ pipes. Why do closed pipes produce only odd harmonics? Effect on sound quality?",
      "Explain thin film interference. Why do soap bubbles show colours? Find minimum thickness of soap film (μ = 1.33) appearing yellow (λ = 580 nm) in reflected light.",
      "Derive wave speed on a stretched string. String of length 1 m, mass 5 g, tension 200 N. Find fundamental frequency. Tension needed to double this frequency?",
    ],
  },
  "wave-optics": {
    overview:
      "Geometric optics treats light as rays that travel in straight lines — and for many purposes, this is good enough. Mirrors, lenses, and the formation of images are all well described by ray optics. But light is a wave, and many phenomena simply cannot be explained by rays alone. Why does light bend around corners? Why do you get a pattern of bright and dark bands when light passes through a narrow slit? Why do some materials become dark when viewed through certain filters? These questions belong to wave optics, which treats light as an electromagnetic wave and explains phenomena like diffraction, interference, and polarisation.\n\nThe foundation of wave optics is Huygens' principle, proposed by Christiaan Huygens in 1678. It states that every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront at any later time is the envelope of these secondary wavelets. This principle elegantly explains the laws of reflection and refraction. When a plane wave hits a mirror, the secondary wavelets produce a reflected plane wave obeying the law of reflection. When a wave enters a denser medium where it travels slower, the wavelets are closer together, and the wavefront bends — this is refraction.\n\nDiffraction is the bending of waves around obstacles or through apertures. If light were strictly rays, a sharp shadow would be cast by an obstacle. Instead, we observe fringes — alternating bright and dark bands. The single-slit diffraction pattern has a central bright maximum twice as wide as the others. A diffraction grating uses thousands of parallel slits to produce very sharp maxima, allowing precise measurement of wavelengths.\n\nPolarisation reveals that light is a transverse wave. Ordinary light vibrates in all transverse directions. Polarised light vibrates in only one direction. Polarisation occurs by reflection (Brewster's angle), by scattering, and by transmission through polaroid sheets. Polarised sunglasses block glare from horizontal surfaces. Liquid crystal displays (LCDs) use polarisation to control pixel brightness. Understanding wave optics is essential for technologies ranging from photography to fibre optics.",
    concepts: [
      {
        title: "Huygens Principle and Wavefronts",
        body:
          "Huygens' principle: every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is the envelope of these wavelets. A wavefront is a surface of constant phase. For a point source, wavefronts are spheres. Far from the source, they approximate planes. Huygens' principle can derive the laws of reflection and refraction geometrically.",
      },
      {
        title: "Reflection and Refraction Using Huygens Principle",
        body:
          "Using Huygens' principle, we derive the laws of reflection and refraction. For reflection: a plane wave incident on a mirror generates secondary wavelets whose envelope is a reflected plane wave at angle r = i. For refraction: when a wave enters a slower medium, the wavelets travel slower, bending the wavefront toward the normal. Snell's law n₁ sin i = n₂ sin r follows directly.",
      },
      {
        title: "Coherent and Incoherent Sources",
        body:
          "Two sources are coherent if they emit waves with constant phase difference. Ordinary sources (bulbs, candles) are incoherent — phase changes randomly. Laser light is highly coherent. To produce coherent light from ordinary sources: (1) Division of wavefront — use two slits (Young's experiment). (2) Division of amplitude — use partial reflection (thin films, Michelson interferometer).",
      },
      {
        title: "Interference of Light Waves",
        body:
          "For two waves y₁ = A sin(ωt), y₂ = A sin(ωt + δ), the resultant is y = 2A cos(δ/2) sin(ωt + δ/2). Intensity I = 4I₀ cos²(δ/2). Constructive interference: δ = 0, 2π, 4π, ... (I = 4I₀). Destructive: δ = π, 3π, 5π, ... (I = 0). Phase difference δ = (2π/λ) × path difference.",
      },
      {
        title: "Young's Double-Slit Experiment — Detailed Analysis",
        body:
          "Monochromatic light illuminates two slits separated by d. Path difference at angle θ: Δx = d sinθ. Constructive: d sinθ = nλ. Bright fringe position y_n = nλD/d. Fringe width β = λD/d. With white light, coloured fringes appear with white centre. Covering one slit destroys the interference pattern.",
      },
      {
        title: "Diffraction of Light at a Single Slit",
        body:
          "Light passing through a slit of width a diffracts. Minima at a sinθ = nλ (n = ±1, ±2, ...). Central maximum is twice as wide as others. Intensity I = I₀ [sin(α)/α]² where α = (πa sinθ)/λ. If a >> λ, pattern is very narrow — ray optics is recovered.",
      },
      {
        title: "Diffraction Grating",
        body:
          "A diffraction grating has many parallel, equally spaced slits. Principal maxima at (a+b) sinθ = nλ, where (a+b) is the grating element. Intensity ∝ N² (N = number of slits). Angular dispersion dθ/dλ = n/[(a+b) cosθ]. Resolving power R = λ/Δλ = nN. Used in spectrometers to analyse light spectra.",
      },
      {
        title: "Resolving Power of Optical Instruments",
        body:
          "Due to diffraction, even a perfect lens forms an Airy pattern. The angular radius of the central bright spot is θ = 1.22λ/D (circular aperture). Rayleigh criterion: two points are just resolved when the central maximum of one falls on the first minimum of the other. θ_min = 1.22λ/D. For microscopes: d_min = 0.61λ/(NA), where NA = n sinα.",
      },
      {
        title: "Polarisation of Light",
        body:
          "Light is a transverse EM wave. In unpolarised light, the electric field vibrates in all transverse directions. In polarised light, it vibrates in one plane. Polarisation is produced by: (1) Polaroid sheets (dichroic crystals). (2) Reflection at Brewster's angle. (3) Scattering (skylight is polarised). (4) Birefringence (calcite splits light into two polarised beams).",
      },
      {
        title: "Malus' Law",
        body:
          "Malus' law: I = I₀ cos²θ, where θ is the angle between transmission axes of polariser and analyser. θ = 0° → I = I₀ (maximum). θ = 90° → I = 0 (crossed polarisers). For unpolarised light incident on a polariser, transmitted intensity = I₀/2. Used in polarised sunglasses, LCDs, and optical stress analysis.",
      },
      {
        title: "Polarisation by Reflection — Brewster's Law",
        body:
          "Brewster's law: tan θ_B = n₂/n₁. At Brewster's angle, reflected light is completely polarised perpendicular to the plane of incidence. For air to glass (n = 1.5), θ_B ≈ 56.3°. At this angle, reflected and refracted rays are perpendicular (θ_B + r = 90°). Polarised sunglasses block horizontally polarised glare from water and roads.",
      },
      {
        title: "Polarisation by Scattering and Double Refraction",
        body:
          "Sunlight scattered by atmospheric molecules is polarised — maximum polarisation at 90° from the Sun. Bees use this for navigation. Birefringent crystals (calcite) split light into ordinary and extraordinary rays with different speeds and refractive indices. Used in wave plates that convert linear to circular polarisation.",
      },
      {
        title: "Validity of Ray Optics and the Wave Model",
        body:
          "Ray optics is valid when obstacles and apertures are much larger than the wavelength. When sizes are comparable to λ, wave optics is needed. For everyday optics (cameras, eyes), ray optics works well. At resolution limits, wave optics becomes essential. X-ray diffraction (λ ~ 0.1 nm) requires wave optics because wavelengths are comparable to atomic spacings.",
      },
      {
        title: "Fresnel and Fraunhofer Diffraction",
        body:
          "Fraunhofer diffraction (far-field): source and screen at infinite distances, plane wavefronts. Includes single-slit, circular aperture, and diffraction grating patterns. Fresnel diffraction (near-field): source or screen at finite distance, spherical wavefronts. Explains Poisson spot (bright spot at centre of shadow of circular disc) and near-field patterns.",
      },
    ],
    keyPoints: [
      "Huygens principle: each point on wavefront is source of secondary wavelets.",
      "Laws of reflection and refraction derivable from Huygens principle.",
      "Interference: I = 4I₀ cos²(δ/2), δ = (2π/λ) × path difference.",
      "Young's double-slit: fringe width β = λD/d.",
      "Single-slit diffraction: minima at a sinθ = nλ.",
      "Diffraction grating: (a+b) sinθ = nλ. Resolving power R = nN.",
      "Rayleigh criterion: θ_min = 1.22λ/D.",
      "Malus' law: I = I₀ cos²θ.",
      "Brewster's law: tan θ_B = n₂/n₁.",
      "Polarisation occurs by reflection, scattering, and transmission.",
      "Fraunhofer: far-field. Fresnel: near-field.",
      "Poisson spot: evidence for wave nature of light.",
    ],
    importantQuestions: [
      "State Huygens principle. Using it, derive the laws of reflection and refraction of light.",
      "Explain Young's double-slit experiment and derive fringe width. How does the pattern change when (a) slit separation increases, (b) screen moves farther, (c) white light is used?",
      "What is diffraction of light? Derive conditions for minima and secondary maxima in single-slit diffraction.",
      "What is resolving power? State Rayleigh criterion. A telescope has objective diameter 10 cm. Find minimum angular separation resolvable for λ = 550 nm.",
      "What is polarisation? State and explain Malus' law. Three polaroid sheets at 45° each. Unpolarised light I₀ incident on first. Find intensity from third.",
      "State Brewster's law. Show that at Brewster's angle, reflected and refracted rays are perpendicular. Find Brewster's angle for glass (μ = 1.5) in air.",
      "Distinguish between Fresnel and Fraunhofer diffraction. Explain formation of Poisson spot.",
      "Describe working of a diffraction grating. Derive condition for principal maxima. How does resolving power depend on number of lines?",
    ],
  },
  "electrostatics-12": {
    overview:
      "Electrostatics is the study of electric charges that are not moving — charges at rest. It might sound static, but the principles of electrostatics govern everything from the spark you get when you touch a metal doorknob after walking on a carpet, to how a photocopier works, to why lightning strikes. Understanding electrostatics is the foundation for everything else in electricity and magnetism.\n\nIt all starts with electric charge. Charge is a fundamental property of matter. There are two types: positive and negative. Like charges repel, opposite charges attract. The unit of charge is the coulomb (C). One coulomb is enormous — it takes about 6.24 × 10¹⁸ electrons to make one coulomb. The charge on a single electron is e = 1.6 × 10⁻¹⁹ C. Charge is quantised — it always comes in multiples of e. Charge is also conserved.\n\nCoulomb's law gives the force between two point charges: F = k|q₁q₂|/r², where k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C². The force is inversely proportional to the square of the distance — double the distance, force drops to one-quarter. The electric force between two protons is about 10³⁶ times stronger than the gravitational force between them.\n\nElectric field is the concept that makes it easier to think about forces without dealing with individual charges. An electric field exists in the space around a charge. For a point charge Q, E = kQ/r². Electric fields obey superposition — total field = vector sum of fields from individual charges. Gauss's law relates flux through a closed surface to enclosed charge, making it a powerful tool for symmetric charge distributions. Electric potential is the scalar counterpart — work done per unit charge to bring a charge from infinity. Potential is easier to work with because it is a scalar. Capacitors store charge and energy, and dielectrics increase their capacitance.",
    concepts: [
      {
        title: "Electric Charge and Its Properties",
        body:
          "Electric charge is a fundamental property. Like charges repel, unlike attract. Charge is quantised (Q = ±ne, e = 1.6 × 10⁻¹⁹ C) and conserved. Conductors allow free charge motion; insulators do not. Semiconductors have intermediate conductivity. Electrostatic induction: charges redistribute in a conductor near a charged object without charge transfer.",
      },
      {
        title: "Coulomb's Law",
        body:
          "Coulomb's law: F = k|q₁q₂|/r², where k = 1/(4πε₀) = 9 × 10⁹ N·m²/C². ε₀ = 8.85 × 10⁻¹² C²/N·m² is the permittivity of free space. Force acts along the line joining charges. The force is attractive for unlike charges, repulsive for like. It is an inverse-square law, like gravity. Valid only for point charges.",
      },
      {
        title: "Electric Field and Electric Field Lines",
        body:
          "Electric field E = F/q₀. For a point charge Q, E = kQ/r² r̂. Electric fields obey superposition. Field lines start at positive charges and end at negative. Tangent gives field direction; density gives field strength. Field lines never cross. They are perpendicular to equipotential surfaces and to conductor surfaces.",
      },
      {
        title: "Electric Dipole and Dipole Moment",
        body:
          "An electric dipole consists of +q and -q separated by 2a. Dipole moment p = q × 2a (from −q to +q). Axial field: E = 2kp/r³. Equatorial field: E = kp/r³. Dipole in uniform field experiences torque τ = p × E and has potential energy U = −p·E. In non-uniform field, it also experiences net force.",
      },
      {
        title: "Gauss's Law",
        body:
          "Gauss's law: ∮E·dA = Q_enclosed/ε₀. Electric flux Φ_E = ∮E·dA = ∮E cosθ dA. Useful for symmetric distributions: (1) Spherical: E = Q/(4πε₀r²) outside sphere. (2) Cylindrical: E = λ/(2πε₀r) for infinite line. (3) Planar: E = σ/(2ε₀) for infinite sheet. One of Maxwell's four equations.",
      },
      {
        title: "Applications of Gauss's Law",
        body:
          "Outside a charged spherical shell: E = Q/(4πε₀r²) — like point charge. Inside: E = 0. Inside a uniformly charged non-conducting sphere: E = ρr/(3ε₀). Infinite line charge: E = λ/(2πε₀r). Infinite sheet: E = σ/(2ε₀). Near a conductor surface: E = σ/ε₀.",
      },
      {
        title: "Electric Potential and Potential Difference",
        body:
          "Electric potential V = W/q₀ (work per unit charge from infinity). For a point charge: V = kQ/r. SI unit: volt (1 V = 1 J/C). Potential is scalar — easier than field. For multiple charges, V = V₁ + V₂ + V₃ + ... E = −dV/dr — field points in direction of steepest potential decrease. Equipotential surfaces: constant V, no work moving along them.",
      },
      {
        title: "Potential Due to Different Charge Distributions",
        body:
          "Point charge: V = kQ/r. Electric dipole: V = kp cosθ/r². Charged spherical shell: outside V = kQ/r, inside V = kQ/R (constant). Non-conducting sphere: inside V = kQ(3R² − r²)/(2R³). Work to assemble a system: U = ½Σ qᵢVᵢ.",
      },
      {
        title: "Equipotential Surfaces and Relation Between E and V",
        body:
          "Equipotential surfaces have constant potential. Properties: (1) No work moving charge along them. (2) E is perpendicular to them. (3) Closer spacing = stronger field. For a point charge, equipotentials are concentric spheres. Inside a conductor, the entire conductor is at constant potential — E = 0.",
      },
      {
        title: "Conductors in Electrostatics",
        body:
          "In electrostatic equilibrium: (1) E = 0 inside conductor. (2) Excess charge on surface. (3) E just outside = σ/ε₀, perpendicular to surface. (4) V constant throughout. (5) Charge accumulates at sharp points (lightning rods). Corona discharge at sharp points — principle of van de Graaff generator.",
      },
      {
        title: "Capacitance and Capacitors",
        body:
          "Capacitance C = Q/V. For an isolated sphere: C = 4πε₀R. Parallel-plate capacitor: C = ε₀A/d. Unit: farad (F). 1 F is enormous — typical capacitors are µF or pF. Series: 1/C_eq = 1/C₁ + 1/C₂ + ... Parallel: C_eq = C₁ + C₂ + ...",
      },
      {
        title: "Energy Stored in a Capacitor",
        body:
          "Energy stored U = Q²/(2C) = ½CV² = ½QV. Energy is stored in the electric field. Energy density u = ½ε₀E². For a parallel-plate capacitor, U = u × volume = (½ε₀E²)(Ad). Capacitors release energy much faster than batteries — used in camera flashes.",
      },
      {
        title: "Dielectrics and Polarisation",
        body:
          "Dielectrics increase capacitance by factor κ: C = κC₀ = κε₀A/d. κ is the dielectric constant. When placed in an electric field, molecules polarise — non-polar molecules develop induced dipoles, polar molecules align. Polarisation P = dipole moment per unit volume. D = ε₀E + P = κε₀E.",
      },
      {
        title: "Dielectric Strength and Breakdown",
        body:
          "Every dielectric has a maximum electric field it can withstand — dielectric strength. Air: 3 × 10⁶ V/m (3 kV/mm). Paper: κ ≈ 3.7, strength 16 kV/mm. Mica: κ ≈ 7, strength 150 kV/mm. Ceramic: κ ≈ 10-10000. Electrolytic capacitors use a thin oxide layer for high capacitance.",
      },
      {
        title: "Van de Graaff Generator",
        body:
          "A van de Graaff generator produces very high voltages (millions of volts). A motor-driven belt carries charge up inside a hollow metal sphere. Inside the sphere, a comb collects the charge and transfers it to the outer surface. The sphere's potential rises as charge accumulates. Used as particle accelerators for nuclear physics.",
      },
    ],
    keyPoints: [
      "Charge is quantised (Q = ±ne) and conserved. e = 1.6 × 10⁻¹⁹ C.",
      "Coulomb's law: F = k|q₁q₂|/r², k = 9 × 10⁹ N·m²/C².",
      "Electric field E = F/q₀. For point charge: E = kQ/r².",
      "Electric dipole moment p = q × 2a. τ = p × E. U = −p·E.",
      "Gauss's law: ∮E·dA = Q_enclosed/ε₀.",
      "Electric potential V = kQ/r. E = −dV/dr.",
      "Conductors: E = 0 inside, charge on surface, V constant.",
      "Capacitance C = Q/V. Parallel-plate: C = ε₀A/d.",
      "Energy in capacitor: U = ½CV². Energy density: u = ½ε₀E².",
      "Dielectric: C = κC₀. κ = ε/ε₀ = 1 + χ_e.",
    ],
    importantQuestions: [
      "State Gauss's law. Use it to derive E due to (a) infinite line charge, (b) infinite sheet, (c) spherical shell.",
      "Define electric potential. Derive potential due to a point charge. Four charges at corners of square of side 1 m: +2 µC, −3 µC, +4 µC, −5 µC. Find potential at centre.",
      "Explain electric dipole. Derive E on axial and equatorial lines. A dipole of moment 2 × 10⁻⁹ C·m at 60° to field of 10⁵ N/C. Find torque.",
      "What is a capacitor? Derive capacitance of parallel-plate capacitor with dielectric. A capacitor of 8 µF with air — capacitance when distance halved and κ = 4 introduced?",
      "Derive expression for energy stored in a capacitor. Show energy density = ½ε₀E². A 10 µF capacitor charged to 100 V. Find energy and energy density if plate separation = 1 mm.",
      "Explain behaviour of conductors in electrostatic equilibrium. Why is E = 0 inside? Why does charge reside on surface?",
      "What is an equipotential surface? State properties. Show that E is perpendicular to equipotential surfaces.",
      "Describe construction and working of van de Graaff generator.",
    ],
  },
  "current-electricity": {
    overview:
      "Electric current is simply charges in motion. When you flip a switch and a bulb lights up, charges are flowing through the wire, through the bulb, and back through the circuit. But what determines how much current flows? What happens when you put multiple resistors together? How do we measure current and voltage in complex circuits? Current electricity answers all these questions.\n\nElectric current (I) is defined as the rate of flow of charge: I = ΔQ/Δt. The SI unit is the ampere (A), where 1 A = 1 C/s. By convention, current direction is the direction of flow of positive charge — even though in a metal wire, it is actually electrons that move. For current to flow, there must be a potential difference (voltage) across the conductor. Ohm's law states that V = IR, where R is resistance. The unit of resistance is the ohm (Ω).\n\nResistance depends on the material, length, cross-sectional area, and temperature. For a uniform conductor: R = ρL/A, where ρ is resistivity. Copper has low resistivity (1.7 × 10⁻⁸ Ω·m), while rubber has extremely high resistivity (~10¹³ Ω·m). For most metals, resistance increases with temperature: R_T = R₀(1 + αΔT).\n\nCircuits with multiple resistors can be analysed using Kirchhoff's laws. Kirchhoff's current law (KCL): sum of currents entering a junction equals sum leaving. Kirchhoff's voltage law (KVL): sum of voltages around any closed loop is zero. These laws, combined with Ohm's law, can solve any resistive circuit. The Wheatstone bridge uses a balanced circuit to measure unknown resistance. A potentiometer measures EMF without drawing current. Understanding these principles is essential for electrical engineering, electronics, and power systems.",
    concepts: [
      {
        title: "Electric Current and Drift Velocity",
        body:
          "Electric current I = dQ/dt. In a conductor, free electrons drift slowly under an electric field. Drift velocity v_d ≈ 0.1 mm/s — extremely slow, yet the light turns on instantly because the signal propagates at near light speed. I = nAe v_d, where n is free electron density. Current density J = I/A = ne v_d = σE, where σ = neμ is conductivity.",
      },
      {
        title: "Ohm's Law and Electrical Resistance",
        body:
          "Ohm's law: V = IR (at constant temperature). R = ρL/A. Resistivity ρ is a material property. Conductivity σ = 1/ρ. Ohmic materials (metals at constant temp) give a straight-line V-I characteristic. Non-ohmic materials (diodes, thermistors) have curved V-I characteristics. Ohm's law is empirical, not fundamental.",
      },
      {
        title: "Resistivity and Conductivity",
        body:
          "Resistivity ρ is intrinsic, independent of shape. SI unit: Ω·m. Conductivity σ = 1/ρ. Classification: conductors (ρ ≈ 10⁻⁸ Ω·m), semiconductors (ρ ≈ 10⁻⁵ to 10⁵ Ω·m), insulators (ρ ≈ 10¹² to 10¹⁸ Ω·m). For metals: ρ_T = ρ₀(1 + αΔT). For semiconductors: ρ decreases with temperature (negative α).",
      },
      {
        title: "Temperature Dependence of Resistance",
        body:
          "For metals: R_T = R₀(1 + αΔT). α ≈ 0.0039/°C for copper. For alloys like constantan, α is very small — ideal for standard resistors. For semiconductors: R decreases exponentially with temperature: R = R₀e^(E_g/(2kT)). Thermistors exploit this for temperature sensing.",
      },
      {
        title: "Combination of Resistors — Series and Parallel",
        body:
          "Series: same current, R_eq = R₁ + R₂ + R₃ + ... Equivalent R > any individual. Parallel: same voltage, 1/R_eq = 1/R₁ + 1/R₂ + ... Equivalent R < smallest individual. For two resistors in parallel: R_eq = (R₁R₂)/(R₁ + R₂).",
      },
      {
        title: "Kirchhoff's Current Law (KCL)",
        body:
          "KCL: ΣI_in = ΣI_out at a junction. Equivalently, ΣI = 0 at a junction (taking sign convention). Based on conservation of charge — charge cannot accumulate at a junction. Used to relate currents in different branches.",
      },
      {
        title: "Kirchhoff's Voltage Law (KVL)",
        body:
          "KVL: ΣV = 0 around any closed loop. Based on conservation of energy — returning to starting point gives zero net potential change. Sign convention: battery from − to + = +V, resistor in direction of current = −IR. Used with KCL to solve multiloop circuits.",
      },
      {
        title: "Wheatstone Bridge",
        body:
          "Four resistors P, Q, R, S in a diamond shape. Galvanometer between two opposite nodes. Battery across the other two. Balanced when P/Q = R/S (I_g = 0). Used to measure unknown resistance S = (Q/P)R. Very sensitive — used in strain gauge measurements.",
      },
      {
        title: "Meter Bridge (Slide Wire Bridge)",
        body:
          "A practical Wheatstone bridge using a 1 m uniform wire. Unknown X in one gap, known R in the other. Jockey moved along wire until galvanometer shows zero deflection. If balance at L cm: X = RL/(100 − L). Can measure from fractions of an ohm to thousands of ohms.",
      },
      {
        title: "Joule Heating and Electrical Power",
        body:
          "Power dissipated: P = VI = I²R = V²/R. Heat generated: H = I²Rt (Joule's law). Applications: electric heaters, incandescent bulbs, fuses. Rated power at rated voltage. If voltage changes, P ∝ V² (fixed R).",
      },
      {
        title: "Electromotive Force (EMF) and Internal Resistance",
        body:
          "EMF (ε) is terminal voltage when no current flows. When current flows: V = ε − Ir, where r is internal resistance. Current I = ε/(R + r). Maximum power transfer when load R = r. Potentiometer measures true EMF unaffected by internal resistance.",
      },
      {
        title: "Potentiometer",
        body:
          "A potentiometer measures potential difference without drawing current. A long uniform wire with constant potential gradient. At balance: ε_x = KL (L is balance length). Uses: comparing EMFs, measuring internal resistance, calibrating voltmeters and ammeters.",
      },
      {
        title: "Electrical Energy Consumption",
        body:
          "Energy = P × t. Commercial unit: kilowatt-hour (kWh). 1 kWh = 3.6 × 10⁶ J. A 100 W bulb used for 10 hours = 1 kWh. Electricity bills charge per kWh. Power factor in AC: P = VI cosφ.",
      },
      {
        title: "Superconductivity",
        body:
          "Zero resistance below critical temperature T_c. Discovered by Onnes in 1911 for mercury at 4.2 K. BCS theory: Cooper pairs. High-temperature superconductors (YBCO, T_c = 92 K) cooled by liquid nitrogen. Applications: MRI magnets, particle accelerators, maglev trains, SQUIDs.",
      },
    ],
    keyPoints: [
      "Current I = dQ/dt. Drift velocity v_d = I/(nAe).",
      "Ohm's law: V = IR. Resistivity ρ = RA/L.",
      "R_T = R₀(1 + αΔT) for metals.",
      "Series: R_eq = ΣRᵢ. Parallel: 1/R_eq = Σ1/Rᵢ.",
      "KCL: ΣI_in = ΣI_out. KVL: ΣV = 0.",
      "Wheatstone bridge balanced: P/Q = R/S.",
      "Meter bridge: X = RL/(100 − L).",
      "Joule heating: P = I²R = V²/R = VI.",
      "EMF: ε = V + Ir. Maximum power when R = r.",
      "Potentiometer: null measurement of EMF.",
      "1 kWh = 3.6 × 10⁶ J.",
      "Superconductivity: R = 0 below T_c.",
    ],
    importantQuestions: [
      "State Ohm's law. Derive expression for resistivity in terms of relaxation time. Explain temperature dependence for metals and semiconductors.",
      "State and explain Kirchhoff's laws. Apply to find currents in a circuit with 2 Ω, 3 Ω, 5 Ω resistors and 4 V, 6 V cells.",
      "Describe Wheatstone bridge and derive balance condition. In a meter bridge, balance at 40 cm with known resistor 10 Ω. Find unknown resistance.",
      "Derive power dissipated in a resistor. A 100 W, 220 V bulb connected to 110 V. Calculate power consumed.",
      "Explain internal resistance. A cell of EMF 2 V, internal resistance 0.5 Ω, connected to 4.5 Ω resistor. Find current and terminal voltage.",
      "What is a potentiometer? Explain how it compares EMFs of two cells. Why is it preferred over a voltmeter?",
      "Series and parallel combinations. Three resistors 2 Ω, 3 Ω, 6 Ω in parallel. Find equivalent R. If connected to 12 V battery, find total current.",
      "Explain Joule's law. A heater draws 5 A from 220 V. Find power and heat in 30 minutes. Cost for 2 hours at ₹8/kWh?",
    ],
  },
  "magnetic-fields-current": {
    overview:
      "Electric currents produce magnetic fields — that was Oersted's groundbreaking discovery in 1820. Before that, electricity and magnetism were considered separate phenomena. Now we know they are deeply connected, part of a single electromagnetic force. When current flows through a wire, a compass needle placed nearby deflects. This is the birth of electromagnetism.\n\nTo quantify the magnetic field produced by current, we use the Biot-Savart law. It tells you the magnetic field contribution from a tiny segment of current-carrying wire. For a long straight wire, the field at distance r is B = μ₀I/(2πr). For a circular loop at its centre, B = μ₀I/(2R). For a solenoid (a coil of many turns), the field inside is B = μ₀nI, where n is the number of turns per unit length. The magnetic field is uniform inside a long solenoid.\n\nWhen a current-carrying wire is placed in a magnetic field, it experiences a force. This is the force that makes electric motors spin. The force on a straight wire in a uniform field is F = ILB sinθ. For a charged particle moving perpendicular to a magnetic field, it moves in a circle — the Lorentz force F = qvB provides the centripetal force. This is the principle behind cyclotrons, mass spectrometers, and the circular path of charged particles in the Earth's magnetic field (auroras).\n\nAmpere's circuital law provides another way to calculate magnetic fields from currents: ∮B·dl = μ₀I_enclosed. For symmetric situations (infinite wire, solenoid, toroid), it is easier than Biot-Savart. Understanding magnetic fields from currents is essential for electric motors, generators, transformers, MRI machines, and particle accelerators.",
    concepts: [
      {
        title: "Magnetic Field and Magnetic Force",
        body:
          "Magnetic field B measured in tesla (T). 1 T = 1 N/(A·m). Earth's field ≈ 5 × 10⁻⁵ T. Lorentz force: F = q(E + v × B). Magnetic force on moving charge: F = qvB sinθ. Direction: right-hand rule. Magnetic force does no work — it changes direction of motion, not speed.",
      },
      {
        title: "Biot-Savart Law",
        body:
          "dB = (μ₀/4π) × (Idl × r̂)/r². μ₀ = 4π × 10⁻⁷ T·m/A is the permeability of free space. The direction of dB is perpendicular to both dl and r. Total field: B = ∫dB. Used to find B due to various current distributions.",
      },
      {
        title: "B Due to Straight Wire and Circular Loop",
        body:
          "Long straight wire: B = μ₀I/(2πr). Circular loop centre: B = μ₀I/(2R). On axis at distance x: B = μ₀IR²/[2(R² + x²)^(3/2)]. For N turns, multiply by N. Right-hand thumb rule: fingers curl in direction of B when thumb points in I direction.",
      },
      {
        title: "Ampere's Circuital Law",
        body:
          "∮B·dl = μ₀I_enclosed. Path integral of B around closed loop = μ₀ × current enclosed. For infinite wire: choose circular Amperian loop, B(2πr) = μ₀I → B = μ₀I/(2πr). Applicable where B is tangent and constant magnitude along integration path.",
      },
      {
        title: "Applications of Ampere's Law",
        body:
          "Solenoid: B = μ₀nI inside (n = N/L). Outside: B ≈ 0. Toroid: B = μ₀NI/(2πr). Coaxial cable: between inner and outer conductors, B = μ₀I/(2πr). Inside wire (uniform current): B = μ₀Ir/(2πR²).",
      },
      {
        title: "Force Between Two Parallel Currents",
        body:
          "Two parallel wires attract if currents in same direction, repel if opposite. Force per unit length: F/L = μ₀I₁I₂/(2πd). Definition of ampere: 1 A = current that produces 2 × 10⁻⁷ N/m between two parallel wires 1 m apart. Used in current balances.",
      },
      {
        title: "Force on a Current-Carrying Conductor in a Magnetic Field",
        body:
          "F = I(L × B). Magnitude: F = ILB sinθ. Direction: right-hand rule (open hand: fingers B, thumb I, palm = force). For a rectangular loop: torque τ = NIAB sinθ. This is the principle of moving-coil galvanometer and electric motor.",
      },
      {
        title: "Torque on a Current Loop — Moving Coil Galvanometer",
        body:
          "Torque τ = NIAB sinθ. For radial magnetic field, θ = 90°, τ = NIAB. Counter torque from spring: τ_s = kφ. At equilibrium: kφ = NIAB, so φ = (NAB/k)I. Sensitivity: current sensitivity φ/I = NAB/k. Voltage sensitivity: φ/V = φ/(IR) = NAB/(kR).",
      },
      {
        title: "Cyclotron Motion",
        body:
          "Charged particle in perpendicular B: qvB = mv²/r → r = mv/(qB). Angular frequency (cyclotron frequency): ω = qB/m, f = qB/(2πm). Independent of speed or radius — particles spiral outward at same frequency. Used in cyclotron accelerators.",
      },
      {
        title: "Velocity Selector and Mass Spectrometer",
        body:
          "Velocity selector: crossed E and B fields. F_E = qE, F_B = qvB. For undeflected path: v = E/B. Mass spectrometer: ions of selected velocity enter a region with B only. r = mv/(qB). m = qBr/v. Different masses hit detector at different positions.",
      },
      {
        title: "Lorentz Force and Helical Motion",
        body:
          "If v has components parallel and perpendicular to B: parallel component → constant motion along field. Perpendicular → circular. Result: helical path with pitch = v_∥ × T = v_∥ × (2πm/qB). Responsible for auroras: charged particles spiral along Earth's field lines.",
      },
      {
        title: "Magnetic Field Due to a Current in Various Configurations",
        body:
          "Arc of circle: B = μ₀Iθ/(4πR). Square loop: B at centre = (μ₀I/(πa)) × 4 × sin45°. Helmholtz coils: two identical coaxial coils separated by radius R — uniform field between them. Magnetic dipole moment of a current loop: m = NIA.",
      },
    ],
    keyPoints: [
      "Biot-Savart law: dB = (μ₀/4π)(Idl × r̂)/r².",
      "Straight wire: B = μ₀I/(2πr). Loop centre: B = μ₀I/(2R).",
      "Ampere's law: ∮B·dl = μ₀I_enclosed.",
      "Solenoid: B = μ₀nI. Toroid: B = μ₀NI/(2πr).",
      "Force on wire: F = ILB sinθ. F/L = μ₀I₁I₂/(2πd).",
      "Moving coil galvanometer: φ = (NAB/k)I.",
      "Cyclotron: r = mv/(qB). ω = qB/m.",
      "Velocity selector: v = E/B.",
      "Lorentz force: F = q(E + v × B).",
    ],
    importantQuestions: [
      "State Biot-Savart law. Derive expression for B on the axis of a circular current loop. Find B at centre for a coil of 50 turns, radius 10 cm, current 2 A.",
      "State and explain Ampere's circuital law. Use it to find B inside and outside a long solenoid. What is the magnetic field outside an ideal solenoid?",
      "Derive expression for force per unit length between two parallel current-carrying conductors. Define 1 ampere using this.",
      "Explain the principle and working of a moving coil galvanometer. How is it converted into an ammeter and voltmeter?",
      "A charged particle enters a uniform magnetic field perpendicularly. Derive expression for radius and time period of circular path. Cyclotron frequency does not depend on radius — explain.",
      "What is Lorentz force? A proton enters crossed E = 10⁵ V/m and B = 0.02 T fields undeflected. Find speed. Use right-hand rules to explain direction.",
      "Explain the principle of mass spectrometer. How does it separate isotopes?",
      "Derive B at centre of (a) circular arc, (b) square loop carrying current.",
    ],
  },
  "magnetic-materials": {
    overview:
      "Not all materials respond to magnetic fields in the same way. If you hold a magnet near a piece of iron, it gets attracted. Near aluminium — nothing visible happens, but a very sensitive instrument would detect a weak repulsion. Near wood — absolutely nothing. Why this difference? The answer lies in the atomic structure of materials.\n\nEvery electron has a magnetic moment due to two sources: (1) its orbital motion around the nucleus (like a tiny current loop) and (2) its intrinsic spin. In most materials, these tiny magnetic moments are randomly oriented and cancel out. But when an external field is applied, they can align to varying degrees, giving rise to different types of magnetism.\n\nDiamagnetic materials (copper, bismuth, water) have all electrons paired. When an external field is applied, it induces a weak opposing magnetic moment. They are repelled slightly by magnets. Superconductors are perfect diamagnets (Meissner effect — they expel all magnetic fields and can levitate magnets above them).\n\nParamagnetic materials (aluminium, oxygen, platinum) have unpaired electrons. Their atomic moments align partially with an external field, producing a weak attraction. At higher temperatures, thermal agitation reduces this alignment — magnetism decreases with heating (Curie's law). Ferromagnetic materials (iron, nickel, cobalt) have strong interactions between neighbouring atoms, causing large regions (domains) to align spontaneously. They can retain magnetisation even after the external field is removed — that is how permanent magnets work.",
    concepts: [
      {
        title: "Magnetic Dipole Moment of an Atom",
        body:
          "Electron orbital motion: current loop I = e/T = eω/(2π), area A = πr². Magnetic moment m_L = IA = (eωr²)/2. Bohr magneton μ_B = eh/(4πm_e) = 9.27 × 10⁻²⁴ J/T. Electron spin contributes m_S = ±μ_B. Total atomic moment = vector sum of orbital and spin moments.",
      },
      {
        title: "Magnetisation and Magnetic Intensity",
        body:
          "Magnetisation M = magnetic moment per unit volume (A/m). Magnetic intensity H = applied field due to free current (A/m). B = μ₀(H + M). Magnetically: most materials have M ∝ H: M = χ_m H, where χ_m is magnetic susceptibility. B = μ₀(1 + χ_m)H = μ₀μ_r H = μH.",
      },
      {
        title: "Magnetic Permeability and Susceptibility",
        body:
          "Relative permeability μ_r = B/B₀ = 1 + χ_m. Absolute permeability μ = μ₀μ_r. For vacuum: μ_r = 1, χ_m = 0. χ_m > 0 → paramagnetic (μ_r > 1). χ_m < 0 → diamagnetic (μ_r < 1). χ_m >> 0 → ferromagnetic (μ_r >> 1).",
      },
      {
        title: "Diamagnetism",
        body:
          "Present in all materials, but weak. Atoms with all electrons paired (closed shells). Induced magnetic moment opposes applied field (Lenz's law at atomic level). χ_m ≈ −10⁻⁵ to −10⁻⁶. Examples: copper, bismuth, water, gold. Mercury is diamagnetic (levitates in strong field).",
      },
      {
        title: "Paramagnetism",
        body:
          "Atoms with unpaired electrons. Random orientation due to thermal energy. External field aligns moments partially. χ_m ≈ 10⁻³ to 10⁻⁵. Curie's law: χ_m = C/T (C = Curie constant). Langevin theory: M = NμL(y) where L(y) = coth y − 1/y, y = μB/(kT). Examples: Al, Pt, O₂, rare earth ions.",
      },
      {
        title: "Ferromagnetism",
        body:
          "Spontaneous alignment of magnetic moments within domains. Due to quantum exchange interaction. χ_m >> 1 (up to 10⁶). Saturation magnetisation. Curie temperature T_c: ferromagnetic → paramagnetic above T_c. Iron: T_c ≈ 770°C. Hysteresis: B does not follow H reversibly.",
      },
      {
        title: "Domain Theory of Ferromagnetism",
        body:
          "Ferromagnetic materials consist of domains (~1 mm to 1 µm). Each domain is fully magnetised but domains point in different directions. Net magnetisation ~ 0 without field. Applied field: domain walls move (favourable domains grow). Strong field: domain rotation. Saturation: all domains aligned.",
      },
      {
        title: "Hysteresis Loop (B-H Curve)",
        body:
          "Starting from unmagnetised: H ↑ → B ↑ to saturation. H ↓ → B does not return along same path. B at H = 0 is remanence B_r. Reverse H to make B = 0: coercivity H_c. Full loop: area = energy loss per cycle (hysteresis loss).",
      },
      {
        title: "Hard and Soft Magnetic Materials",
        body:
          "Soft iron: narrow hysteresis loop, low H_c (easy to magnetise/demagnetise). Used in transformers, electromagnets — low hysteresis loss. Steel (hard): wide loop, high H_c, high B_r. Used for permanent magnets. Alnico, ferrites, NdFeB magnets.",
      },
      {
        title: "Curie's Law and Curie Temperature",
        body:
          "Curie law for paramagnets: χ_m = C/T. Curie-Weiss law for ferromagnets above T_c: χ_m = C/(T − T_c). Below T_c, spontaneous magnetisation exists. At T_c, thermal energy overcomes exchange interaction. For iron: T_c = 1043 K. Heating a permanent magnet above T_c destroys its magnetism.",
      },
      {
        title: "Electromagnets and Permanent Magnets",
        body:
          "Electromagnet: soft iron core inside solenoid. High B, negligible remanence — magnetic only when current flows. Earth magnets: used in MRI (2 T), particle accelerators (8 T). Permanent magnets: hard ferromagnetic materials with high B_r and H_c. Applications: speakers, motors, generators, magnetic separators.",
      },
      {
        title: "Magnetic Properties of Superconductors",
        body:
          "Type I superconductors: perfect diamagnets below T_c — Meissner effect: B = 0 inside. χ_m = −1. Magnetic levitation. Type II: allow partial field penetration (vortices) above H_c1. High-T_c superconductors are type II. Applications: maglev trains, MRI.",
      },
      {
        title: "Magnetic Shielding",
        body:
          "High permeability materials (mu-metal) redirect magnetic field lines. Used to shield sensitive equipment from magnetic interference (CRT monitors, electron microscopes, biomedical sensors). Earth's field must be shielded for precise magnetic measurements.",
      },
    ],
    keyPoints: [
      "Bohr magneton μ_B = eh/(4πm_e) = 9.27 × 10⁻²⁴ J/T.",
      "Magnetisation M = magnetic moment/volume. B = μ₀(H + M).",
      "Magnetic susceptibility χ_m = M/H. μ_r = 1 + χ_m.",
      "Diamagnetic: χ_m < 0 (all electrons paired). μ_r < 1.",
      "Paramagnetic: χ_m > 0 (unpaired electrons). Curie law.",
      "Ferromagnetic: χ_m >> 1. Domains. Curie temperature.",
      "Hysteresis: B_r (remanence), H_c (coercivity).",
      "Soft: narrow loop, low loss. Hard: wide loop, permanent magnet.",
      "Superconductors: perfect diamagnets (Meissner effect, χ_m = −1).",
    ],
    importantQuestions: [
      "Distinguish between diamagnetic, paramagnetic, and ferromagnetic materials with examples. Give properties of each.",
      "What is hysteresis? Draw and explain B-H curve for a ferromagnetic material. Define retentivity and coercivity.",
      "Explain domain theory of ferromagnetism. How do domains behave when an external magnetic field is applied?",
      "State Curie's law for paramagnetic materials. What is Curie temperature? What happens to a ferromagnet above its Curie temperature?",
      "Distinguish between hard and soft magnetic materials. Give two applications of each.",
      "What is magnetic susceptibility? Define relative permeability. Derive relation: μ_r = 1 + χ_m.",
      "Explain the magnetic properties of superconductors. What is the Meissner effect?",
      "An iron rod of cross-section 2 cm² and μ_r = 1000 is placed in a solenoid. Current 1 A, length 50 cm, 2000 turns. Find B, M, H.",
    ],
  },
  "electromagnetic-induction": {
    overview:
      "If electric currents produce magnetic fields, can magnetic fields produce electric currents? Michael Faraday asked this question in the 1830s, and the answer changed the world. Yes — a changing magnetic field creates an electric field, which can drive a current in a conductor. This is electromagnetic induction.\n\nFaraday's law states that the induced EMF in a coil equals the negative rate of change of magnetic flux: ε = −dΦ/dt. The minus sign is Lenz's law — the induced current flows in a direction that opposes the change causing it. It is nature's way of conserving energy. If induced current helped the change, you would get infinite energy for free — impossible.\n\nMagnetic flux Φ = BA cosθ. The flux through a coil can change because: (1) the magnetic field B changes, (2) the area A of the loop changes, (3) the angle θ changes, or (4) any combination. This is the principle behind electric generators — rotating a coil in a magnetic field changes flux sinusoidally, producing alternating current.\n\nSelf-induction occurs when a changing current in a coil induces an EMF in the same coil. The back EMF is ε = −L dI/dt, where L is self-inductance. A coil with high L opposes rapid changes in current — it acts as a 'current flywheel'. Mutual induction occurs between two coils, and is the principle of the transformer, which steps AC voltages up or down. Induction also explains eddy currents — circulating currents induced in bulk conductors, used in induction heating and braking.",
    concepts: [
      {
        title: "Magnetic Flux",
        body:
          "Φ = B·A = BA cosθ. Unit: weber (Wb). 1 Wb = 1 T·m². For a coil of N turns: Φ_total = NΦ. Flux through a surface depends on orientation — maximum when area perpendicular to B, zero when parallel.",
      },
      {
        title: "Faraday's Law of Induction",
        body:
          "ε = −dΦ/dt for a single loop. For N turns: ε = −N dΦ/dt. The induced EMF is proportional to the rate of change of flux, not the flux itself. A static magnetic field produces zero EMF. This is what makes AC generators work — the coil rotates, so flux changes continuously.",
      },
      {
        title: "Lenz's Law",
        body:
          "The induced current always opposes the change that caused it. If you push a magnet into a coil, the induced current creates a magnetic field that pushes back. If you pull it out, the induced current pulls it back. This is why you feel resistance when moving a magnet near a conductor. Lenz's law ensures conservation of energy — work must be done to generate electrical energy.",
      },
      {
        title: "Motional EMF",
        body:
          "A conductor of length L moving perpendicular to B with speed v: ε = BLv. Derived from Lorentz force: F = qvB on electrons. Work done by magnetic force = qvBL. Equivalent to rate of cutting flux lines. For a rod sliding on rails: ε = BLv regardless of path shape.",
      },
      {
        title: "AC Generator (Alternator)",
        body:
          "A rectangular coil rotates in uniform B with angular speed ω. Flux Φ = NBA cosωt. EMF ε = −dΦ/dt = NBAω sinωt = ε₀ sinωt. Peak EMF ε₀ = NBAω. Frequency: f = ω/(2π). India: 50 Hz. Carbon brushes and slip rings deliver AC. Simple and robust.",
      },
      {
        title: "Eddy Currents",
        body:
          "Changing B induces circulating currents in bulk conductors. Effects: (1) heating (useful in induction cooktops), (2) braking (magnetic brakes in trains), (3) damping. Wasteful in transformers — laminated cores break eddy current paths and reduce losses. Also used in metal detectors.",
      },
      {
        title: "Self-Inductance",
        body:
          "For a coil: Φ = LI. ε_L = −L dI/dt. L = NΦ/I. Solenoid: L = μ₀N²A/l. Unit: henry (H). 1 H = 1 V·s/A. A 1 H coil produces 1 V back EMF when current changes at 1 A/s. Inductors oppose rapid current changes — they smooth current.",
      },
      {
        title: "Energy Stored in an Inductor",
        body:
          "U = ½LI². Energy is stored in the magnetic field. Energy density: u = B²/(2μ₀). The work done to build up current is stored as magnetic energy. When the circuit opens, this energy dissipates — sometimes as a spark across the switch.",
      },
      {
        title: "Mutual Inductance",
        body:
          "Two coils: current I₁ in coil 1 creates flux through coil 2: Φ₂ = MI₁. ε₂ = −M dI₁/dt. M = mutual inductance. M = k√(L₁L₂) where k ≤ 1 is coupling coefficient. For coaxial solenoids: M = μ₀N₁N₂A/l.",
      },
      {
        title: "Transformer",
        body:
          "Alternating current in primary creates changing flux. Mutual induction induces EMF in secondary. V_s/V_p = N_s/N_p. For an ideal transformer: V_pI_p = V_sI_s. Step-up: N_s > N_p (high V, low I). Step-down: N_s < N_p (low V, high I). Efficiency can exceed 99% in modern transformers.",
      },
      {
        title: "Power Transmission",
        body:
          "Power loss in transmission lines: P_loss = I²R. To reduce loss: transmit at high voltage (low current). Generators produce ~20 kV, stepped up to 400 kV or more for transmission, then stepped down for distribution. This is why AC (which can be transformed easily) dominates power systems.",
      },
      {
        title: "Induction Cooktop",
        body:
          "A coil below the glass top carries high-frequency AC (20-100 kHz). The changing magnetic field induces eddy currents in the ferromagnetic cookware. The eddy currents heat the pan directly via I²R heating. The glass top stays cool — only the pan gets hot. Fast and efficient.",
      },
    ],
    keyPoints: [
      "Magnetic flux Φ = BA cosθ. Unit: weber (Wb).",
      "Faraday's law: ε = −N dΦ/dt.",
      "Lenz's law: induced current opposes the change.",
      "Motional EMF: ε = BLv.",
      "AC generator: ε = NBAω sinωt.",
      "Eddy currents: circulating currents in bulk conductors.",
      "Self-inductance: L = NΦ/I. ε = −L dI/dt. Energy: ½LI².",
      "Mutual inductance: M = k√(L₁L₂). V_s/V_p = N_s/N_p.",
      "Transformer: step-up/step-down AC voltages.",
    ],
    importantQuestions: [
      "State Faraday's law of electromagnetic induction. Derive expression for induced EMF in a coil rotating in uniform magnetic field (AC generator).",
      "State Lenz's law. Explain with examples why it follows the law of conservation of energy.",
      "What is motional EMF? Derive ε = BLv for a conductor moving perpendicular to B. A 0.5 m rod moves at 10 m/s in 0.2 T field. Find induced EMF.",
      "Explain self-inductance. Derive L for a solenoid. A solenoid 0.5 m long, 2 cm² area, 1000 turns. Find L. Energy stored at 2 A?",
      "Explain mutual inductance. A transformer with 200 primary turns, 1000 secondary turns. Primary voltage 230 V. Find secondary voltage. If secondary current is 1 A, find primary current (ideal).",
      "What are eddy currents? State two useful applications and two ways to minimise losses.",
      "Derive expression for energy stored in an inductor. Show energy density = B²/(2μ₀).",
      "Explain high-voltage power transmission. Why is AC preferred over DC for long-distance transmission?",
    ],
  },
  "ac-circuits": {
    overview:
      "Most of the electrical power we use is alternating current (AC), not direct current (DC). In a DC circuit, current flows steadily in one direction. In an AC circuit, the voltage and current change direction sinusoidally, typically 50 times per second (50 Hz in India). Why do we use AC? Because AC voltage can be easily stepped up or down using transformers, making long-distance power transmission efficient.\n\nIn an AC circuit, the relationship between voltage and current depends on what elements are present. A resistor behaves the same way for AC as for DC — voltage and current are in phase. But capacitors and inductors behave differently. For an inductor, voltage leads current by 90° (the inductor opposes current changes). For a capacitor, current leads voltage by 90° (the capacitor opposes voltage changes). This phase difference has practical consequences — it affects power delivery and efficiency.\n\nThe impedance (generalised resistance for AC) of an RLC series circuit is Z = √(R² + (X_L − X_C)²), where X_L = ωL and X_C = 1/(ωC). At a particular frequency called the resonant frequency f₀ = 1/(2π√(LC)), X_L = X_C, the impedance is minimum (just R), and current is maximum. This is resonance — the principle behind tuning a radio to a specific station.\n\nPower in AC circuits is not simply VI. The power factor cosφ = R/Z accounts for the phase difference between voltage and current. When voltage and current are out of phase, average power P_avg = V_rms I_rms cosφ. For a purely resistive circuit (cosφ = 1), all power is useful. For purely reactive circuits (cosφ = 0), no net power is consumed — energy oscillates between source and circuit. Understanding AC circuits is essential for power systems, audio electronics, radio communications, and every device that plugs into a wall socket.",
    concepts: [
      {
        title: "AC Voltage and Current — RMS Values",
        body:
          "v(t) = V₀ sin(ωt), i(t) = I₀ sin(ωt + φ). RMS: V_rms = V₀/√2, I_rms = I₀/√2. Average power: P_avg = V_rms I_rms cosφ. Household supply: 230 V RMS, 50 Hz, peak ≈ 325 V. RMS is the equivalent DC value that delivers the same power. Average of sin²(ωt) = 1/2.",
      },
      {
        title: "AC Circuit with Pure Resistor",
        body:
          "v = V₀ sinωt, i = v/R = (V₀/R) sinωt. Phase: φ = 0 (in phase). Power: p(t) = V₀I₀ sin²ωt. P_avg = V₀I₀/2 = V_rmsI_rms. Always positive — resistor consumes power. No reactive component.",
      },
      {
        title: "AC Circuit with Pure Inductor",
        body:
          "v = V₀ sinωt. i = (V₀/ωL) sin(ωt − π/2) = (V₀/X_L) sin(ωt − π/2). Inductive reactance X_L = ωL = 2πfL. Current lags voltage by 90°. P_avg = 0 — energy stored in magnetic field half-cycle, returned next half-cycle.",
      },
      {
        title: "AC Circuit with Pure Capacitor",
        body:
          "v = V₀ sinωt. i = ωCV₀ sin(ωt + π/2) = (V₀/X_C) sin(ωt + π/2). Capacitive reactance X_C = 1/(ωC) = 1/(2πfC). Current leads voltage by 90°. P_avg = 0. X_C is large at low frequencies (blocks DC), small at high frequencies (passes AC).",
      },
      {
        title: "Series LCR Circuit and Impedance",
        body:
          "Z = √(R² + (X_L − X_C)²). Phase angle φ = tan⁻¹((X_L − X_C)/R). i(t) = V₀/Z sin(ωt − φ). Current depends on frequency. At resonance: X_L = X_C → Z = R (minimum). Power factor cosφ = R/Z.",
      },
      {
        title: "Resonance in LCR Circuit",
        body:
          "Resonance when ω₀L = 1/(ω₀C) → ω₀ = 1/√(LC), f₀ = 1/(2π√(LC)). At resonance: Z = R (minimum), I₀ = V₀/R (maximum). Circuit is purely resistive. Bandwidth Δω = R/L. Quality factor Q = ω₀L/R = 1/(ω₀RC). High Q → sharp resonance (selective tuning).",
      },
      {
        title: "Power in AC Circuits and Power Factor",
        body:
          "Instantaneous power p(t) = v(t)i(t) = V₀I₀ sin(ωt) sin(ωt − φ). Average power: P_avg = V_rms I_rms cosφ. cosφ = R/Z is power factor. For resistor: cosφ = 1. For inductor/capacitor: cosφ = 0. Most loads have 0 < cosφ < 1. Low power factor wastes power — utilities charge penalties.",
      },
      {
        title: "Power Factor Correction",
        body:
          "Industrial loads (motors) have lagging power factor (inductive). Fixed by adding capacitors in parallel — they supply leading reactive current. Result: cosφ → 1, I decreases (less I²R loss), same real power delivered. Capacitor bank: C = P(tanφ₁ − tanφ₂)/(ωV²).",
      },
      {
        title: "LC Oscillations",
        body:
          "An LC circuit oscillates if charged capacitor is connected to inductor. Charge q(t) = q₀ cos(ω₀t), current i(t) = −ω₀q₀ sin(ω₀t). Energy oscillates between electric (UE = q²/(2C)) and magnetic (UB = ½Li²). Frequency f₀ = 1/(2π√(LC)). Ideal: undamped oscillations. Real: resistance damps oscillations.",
      },
      {
        title: "Transformer in AC Circuits",
        body:
          "V_s/V_p = N_s/N_p. Step-up: N_s > N_p, V_s > V_p. Step-down: N_s < N_p. Power conservation: V_pI_p = V_sI_s (ideal). Real transformers have eddy current losses (laminated core), hysteresis losses, I²R losses in windings. Efficiency η = P_out/P_in × 100%. Modern: η > 98%.",
      },
      {
        title: "Three-Phase AC",
        body:
          "Three voltages 120° apart: V₁ = V₀ sinωt, V₂ = V₀ sin(ωt − 120°), V₃ = V₀ sin(ωt − 240°). Each phase connected via separate wire. Advantages: constant total power, smaller motors, easier to start, uses less copper. Star (Y) and delta (Δ) configurations.",
      },
      {
        title: "AC Through R, L, C — Phasor Diagrams",
        body:
          "Phasor: rotating vector representing sinusoidal quantity. Length = amplitude, initial angle = phase. Rotates at ω. Addition of phasors: vector addition. For R: V and I in phase (along same line). For L: V leads I by 90°. For C: I leads V by 90°. Series LCR: V_R + V_L + V_C = V_supply (phasor sum).",
      },
    ],
    keyPoints: [
      "v(t) = V₀ sinωt, V_rms = V₀/√2. I_rms = I₀/√2.",
      "R: φ = 0 (in phase). L: I lags V by 90°. C: I leads V by 90°.",
      "X_L = ωL = 2πfL. X_C = 1/(ωC) = 1/(2πfC).",
      "Z = √(R² + (X_L − X_C)²). tanφ = (X_L − X_C)/R.",
      "Resonance: ω₀ = 1/√(LC). f₀ = 1/(2π√(LC)).",
      "At resonance: Z = R, I_max = V/R, φ = 0.",
      "Quality factor Q = ω₀L/R. Bandwidth Δω = R/L.",
      "Average power: P_avg = V_rms I_rms cosφ.",
      "Power factor cosφ = R/Z. PF correction: parallel capacitors.",
      "LC oscillations: f₀ = 1/(2π√(LC)).",
    ],
    importantQuestions: [
      "Derive expression for impedance of series LCR circuit. Obtain condition for resonance. What is the Q-factor and its significance?",
      "Define RMS value of AC. Show that V_rms = V₀/√2. An AC supply 230 V, 50 Hz is applied to a 0.5 H inductor. Find inductive reactance and RMS current.",
      "Explain power in AC circuit. Show that P_avg = V_rms I_rms cosφ. What is power factor? A circuit with R = 10 Ω, L = 0.1 H, C = 100 µF at 50 Hz. Find power factor.",
      "What is resonance in series LCR circuit? Derive condition for resonance. A series LCR circuit with L = 2 H, C = 50 µF, R = 10 Ω. Find resonant frequency and Q-factor.",
      "Explain phasor diagrams for pure R, L, C and series LCR circuit.",
      "What is power factor correction? Why is low power factor undesirable? A motor draws 10 A at 230 V, cosφ = 0.6. Calculate capacitor needed to raise pf to 0.9.",
      "Explain LC oscillations. Derive expression for frequency. An LC circuit with L = 10 mH, C = 1 µF oscillates. Find frequency and maximum current if max charge = 100 µC.",
      "Distinguish between AC and DC. State advantages of AC over DC for power distribution.",
    ],
  },
  "dual-nature": {
    overview:
      "Light behaves like a wave — we saw that with interference, diffraction, and polarisation. But light also behaves like a particle. This is not a contradiction; it is the dual nature of light. When light interacts with matter (absorption, emission), it acts as a stream of particles called photons. When it propagates, it acts as a wave. This duality is not limited to light — electrons, protons, and even atoms exhibit both particle and wave behaviour.\n\nThe photoelectric effect was the first clear evidence of the particle nature of light. When light shines on a metal surface, electrons are ejected — photoelectrons. Classical wave theory predicted that (1) higher intensity means faster electrons, and (2) electrons would be emitted regardless of frequency given enough time. Both were wrong. Experiment showed: (1) the maximum kinetic energy of photoelectrons depends on frequency, not intensity, and (2) for frequencies below a threshold, no electrons are emitted regardless of intensity. Einstein explained this in 1905 by proposing that light consists of photons, each with energy E = hf. Increasing intensity increases the number of photons, not their energy. A photon transfers all its energy to a single electron. The work function φ is the minimum energy needed to free an electron. K_max = hf − φ. This won Einstein the Nobel Prize.\n\nThe photoelectric effect also gave us the value of Planck's constant h = 6.63 × 10⁻³⁴ J·s. It is used in photoelectric cells, solar panels, light sensors, and automatic door openers. X-rays are produced by the inverse process — electrons accelerated through a high voltage strike a metal target, emitting X-ray photons. The minimum wavelength of X-rays is λ_min = hc/(eV).\n\nDe Broglie proposed that if light (a wave) has particle properties, then particles should have wave properties. The de Broglie wavelength λ = h/p. For an electron accelerated through V volts, λ = h/√(2meV) ≈ 1.23/√V nm. This was confirmed by Davisson and Germer who observed electron diffraction from a crystal. Wave-particle duality is at the heart of quantum mechanics.",
    concepts: [
      {
        title: "Photoelectric Effect — Experimental Results",
        body:
          "Hertz discovered photoelectric effect (1887). Important observations: (1) Above threshold frequency f₀, photoelectrons emitted instantly. (2) K_max ∝ f (not intensity). (3) Below f₀, no emission regardless of intensity. (4) Photoelectric current ∝ intensity (above f₀). (5) Stopping potential V₀ = K_max/e. Classical wave theory could NOT explain observations 1, 2, or 3.",
      },
      {
        title: "Einstein's Photon Theory",
        body:
          "Light consists of photons, each with E = hf = hc/λ. Photon is absorbed by one electron. Energy conservation: hf = φ + K_max. Stopping potential: eV₀ = hf − φ. Slope of V₀ vs f gives h/e. Einstein's equation explains all experimental observations. h = 6.63 × 10⁻³⁴ J·s.",
      },
      {
        title: "Work Function and Threshold Frequency",
        body:
          "Work function φ = hf₀. The minimum energy needed to liberate an electron from a metal surface. Different metals have different φ. Cesium: φ = 2.14 eV (visible light). Sodium: 2.3 eV. Aluminium: 4.08 eV. Copper: 4.7 eV (UV required). Most metals have φ in the range 2-5 eV. f₀ = φ/h.",
      },
      {
        title: "Photoelectric Cells and Applications",
        body:
          "Photocell: metal surface (photocathode) emits electrons when light strikes. Electrons collected by anode → current flows. Applications: (1) Automatic doors (light beam interrupted), (2) Burglar alarms, (3) Smoke detectors, (4) Film soundtracks, (5) Photomultipliers (electron multiplication). Solar cells use photovoltaic effect — built-in junction field separates charges.",
      },
      {
        title: "X-Ray Production",
        body:
          "Coolidge tube: electrons from hot filament accelerated by high voltage (10-100 kV) strike metal target (tungsten). Electrons decelerate rapidly → emit X-ray photons. Bremsstrahlung (braking radiation): continuous spectrum from zero to maximum frequency. Characteristic X-rays: specific frequencies from electron transitions in target atoms. Minimum wavelength λ_min = hc/(eV).",
      },
      {
        title: "Continuous and Characteristic X-ray Spectra",
        body:
          "Continuous spectrum: due to electron deceleration. Intensity ∝ ZV² (Z = atomic number). Minimum λ (cutoff) depends only on accelerating voltage, not target material. Characteristic X-rays: electrons knock inner-shell electrons out; outer electrons fill vacancies, emitting specific frequencies. Moseley's law: √f ∝ (Z − b). Used for element identification.",
      },
      {
        title: "Wave Nature of Matter — de Broglie Hypothesis",
        body:
          "Louis de Broglie (1924): just as light has both wave and particle properties, matter particles have wave properties. λ = h/p = h/(mv). For a particle in a box, only certain standing wave patterns are possible → quantised energy levels. De Broglie wavelength of macroscopic objects is tiny (h is very small) — wave nature not observed.",
      },
      {
        title: "Davisson-Germer Experiment",
        body:
          "Electrons scattered from a nickel crystal showed diffraction pattern — proving electron waves. The experiment: electrons accelerated through 54 V (λ = 0.165 nm) directed at nickel crystal. At θ = 50°, constructive interference observed consistent with d = 0.091 nm. This confirmed de Broglie's hypothesis.",
      },
      {
        title: "De Broglie Wavelength of Electron",
        body:
          "For electron accelerated through V volts: KE = eV = p²/(2m). p = √(2meV). λ = h/√(2meV) = h/√(2m₀eV). Numerically: λ (in nm) = 1.23/√V. For V = 100 V: λ = 0.123 nm — same order as atomic spacings in crystals.",
      },
      {
        title: "Wave Packet and Uncertainty Principle",
        body:
          "A wave packet is a group of waves with slightly different wavelengths, confined in space. It represents a particle. Heisenberg uncertainty principle: Δx·Δp ≥ h/(4π). Also: ΔE·Δt ≥ h/(4π). You cannot simultaneously know position and momentum precisely. This is a fundamental limit, not a measurement limitation.",
      },
      {
        title: "Heisenberg Uncertainty Principle — Applications",
        body:
          "Δx·Δp ≥ ħ/2 (where ħ = h/(2π)). It explains: (1) why electrons cannot fall into nucleus (confining to nuclear size gives huge momentum), (2) natural line width (finite lifetime → energy spread), (3) quantum tunnelling (particle passes through barrier with energy below barrier height). Zero-point energy: particle in lowest state still has kinetic energy.",
      },
      {
        title: "Photon Momentum",
        body:
          "Photon: E = pc. Momentum p = E/c = hf/c = h/λ. Photon has momentum even though it has no rest mass. Radiation pressure: force from absorbed/reflected photons. Solar sails use this for spacecraft propulsion. Comet tails point away from Sun due to radiation pressure.",
      },
      {
        title: "Compton Effect",
        body:
          "X-ray photons scattered by electrons shift to longer wavelength. Compton shift: Δλ = h/(m₀c) × (1 − cosθ). h/(m₀c) = 0.00243 nm (Compton wavelength). Confirms photon momentum p = h/λ. Classical theory predicts no wavelength shift — this was evidence for particle nature of EM radiation.",
      },
    ],
    keyPoints: [
      "Photoelectric effect: Einstein's equation hf = φ + K_max.",
      "Threshold frequency f₀ = φ/h. Stopping potential eV₀ = hf − φ.",
      "X-ray: λ_min = hc/(eV). Continuous + characteristic spectra.",
      "de Broglie wavelength λ = h/p = h/(mv).",
      "Davisson-Germer: electron diffraction from nickel crystal.",
      "Electron λ = 1.23/√V nm (V in volts).",
      "Heisenberg: Δx·Δp ≥ ħ/2, ΔE·Δt ≥ ħ/2.",
      "Photon momentum p = h/λ = E/c.",
      "Compton effect: Δλ = h/(m₀c)(1 − cosθ).",
    ],
    importantQuestions: [
      "State Einstein's photoelectric equation. Explain how it accounts for (a) threshold frequency, (b) dependence of K_max on frequency, (c) instantaneous emission.",
      "Describe experimental study of photoelectric effect. Draw V₀ vs f graph and explain how h and φ are determined.",
      "What is de Broglie hypothesis? Derive λ for an electron accelerated through V volts. Find λ for electron through 100 V.",
      "Describe Davisson-Germer experiment. How did it confirm de Broglie's hypothesis?",
      "State Heisenberg uncertainty principle. Explain why electrons cannot exist inside the nucleus using uncertainty principle.",
      "Explain X-ray production. Derive λ_min. An X-ray tube operates at 50 kV. Find minimum wavelength.",
      "What is the Compton effect? Derive Compton shift. Why is it not observable with visible light?",
      "Calculate energy, frequency, and wavelength of a photon of momentum 3.3 × 10⁻²⁴ kg·m/s. h = 6.63 × 10⁻³⁴ J·s.",
    ],
  },
  "atoms-nuclei": {
    overview:
      "What is matter made of? At the centre of every atom is a tiny, dense nucleus containing protons and neutrons. Around it, electrons exist in quantised orbits — not like planets around the Sun, but as probability clouds described by quantum mechanics. The journey to understanding atomic and nuclear structure is one of the most fascinating stories in physics.\n\nThe atom was once thought to be indivisible. Dalton proposed it as a solid sphere. J.J. Thomson discovered the electron and proposed the 'plum pudding' model: electrons embedded in a positive sphere. But Rutherford's gold foil experiment (1911) shattered that model. He fired alpha particles at a thin gold foil. Most passed through, but some bounced back — impossible if positive charge was spread uniformly. Rutherford concluded that the positive charge and most of the mass is concentrated in a tiny nucleus. The atom is mostly empty space.\n\nBohr combined Rutherford's nuclear model with Planck's quantum theory. He proposed that electrons revolve in specific orbits without radiating energy. Energy is absorbed/emitted only when an electron jumps between orbits: ΔE = hf = E_final − E_initial. The Bohr model explains the hydrogen spectrum perfectly — Balmer series, Lyman series, Paschen series. But it failed for multi-electron atoms, leading to quantum mechanics.\n\nNuclear physics goes deeper — inside the nucleus. The nucleus contains Z protons and (A − Z) neutrons. The strong nuclear force holds them together against electrostatic repulsion. Einstein's E = mc² explains nuclear binding energy: the mass of a nucleus is less than the sum of its constituent masses. This mass defect Δm corresponds to binding energy. Nuclear fission (splitting heavy nuclei) and fusion (combining light nuclei) release enormous energy. Radioactive decay — alpha, beta, and gamma — transforms one element into another, with applications in medicine, archaeology (carbon dating), and power generation.",
    concepts: [
      {
        title: "Rutherford's Alpha-Particle Scattering Experiment",
        body:
          "Alpha particles (He²⁺) from a radioactive source bombarded thin gold foil. Most passed through undeflected. A few scattered at large angles — some even bounced back. This meant the positive charge was concentrated in a very small volume (nucleus). Rutherford derived: N(θ) ∝ 1/sin⁴(θ/2). Radius of nucleus ≈ 10⁻¹⁴ m. Atom radius ≈ 10⁻¹⁰ m — mostly empty.",
      },
      {
        title: "Bohr's Atomic Model — Postulates",
        body:
          "Postulate 1: Electrons revolve in stable orbits called stationary states without radiating. Postulate 2: Angular momentum is quantised: mvr = nħ (n = 1,2,3...). Postulate 3: Electrons jump between orbits: hf = E_i − E_f. Explains hydrogen spectrum: Rydberg formula 1/λ = R(1/n_f² − 1/n_i²). R = 1.097 × 10⁷ m⁻¹.",
      },
      {
        title: "Hydrogen Spectrum — Spectral Series",
        body:
          "Lyman series (n_f = 1): ultraviolet. Balmer (n_f = 2): visible (Hα 656 nm, Hβ 486 nm, Hγ 434 nm, Hδ 410 nm). Paschen (n_f = 3): infrared. Brackett (n_f = 4), Pfund (n_f = 5): far IR. The Balmer series is visible in the solar spectrum and was discovered first.",
      },
      {
        title: "Energy Levels of Hydrogen Atom",
        body:
          "E_n = −13.6/n² eV. Ground state (n=1): −13.6 eV. First excited (n=2): −3.4 eV. Ionisation energy: 13.6 eV. Radius r_n = n²r₀, r₀ = 0.529 Å (Bohr radius). Velocity v_n = v₀/n, v₀ = c/137 ≈ 2.18 × 10⁶ m/s. These match experimental hydrogen spectrum.",
      },
      {
        title: "Atomic Excitation and Ionisation",
        body:
          "An atom can be excited by (1) absorbing a photon of exactly the right energy, or (2) collision with an energetic electron (Franck-Hertz experiment). Spontaneous emission: excited atom returns to ground emitting random-phase photon. Stimulated emission: photon triggers emission of identical photon (laser). Ionisation: electron removed completely.",
      },
      {
        title: "Lasers — Principle and Applications",
        body:
          "Population inversion: more atoms in excited state than ground state. Metastable states allow population build-up. Stimulated emission produces coherent, monochromatic, directional light. Three-level and four-level laser systems. Ruby laser (694 nm), He-Ne laser (632.8 nm). Applications: barcode scanners, surgery, optical communication, lidar.",
      },
      {
        title: "Nuclear Structure — Protons and Neutrons",
        body:
          "Nucleus: Z protons, N = A − Z neutrons. Notation: ᴬZX. Isotopes: same Z, different A (¹H, ²H, ³H). Isotones: same N. Isobars: same A (⁴⁰Ar, ⁴⁰Ca). Nuclear size: R = R₀A^(1/3), R₀ ≈ 1.2 × 10⁻¹⁵ m. Nuclear density ≈ 2.3 × 10¹⁷ kg/m³ — incredibly dense.",
      },
      {
        title: "Nuclear Force",
        body:
          "Strong nuclear force: attractive, short-range (~10⁻¹⁵ m). Charge-independent (proton-proton, proton-neutron, neutron-neutron same). Repulsive at very small distances (hard core). Mediated by pions (π mesons). Yukawa model: range ∝ 1/m_π. Much stronger than electromagnetic force at nuclear distances.",
      },
      {
        title: "Mass Defect and Binding Energy",
        body:
          "Mass of nucleus < sum of constituent masses. Δm = [Zm_p + (A−Z)m_n − M_nucleus]. Binding energy BE = Δmc². BE per nucleon ≈ 8 MeV (iron peak). Maximum BE per nucleon at A ≈ 56 (iron). Smaller and larger nuclei have lower BE/nucleon — explains energy release in fission and fusion.",
      },
      {
        title: "Nuclear Fission",
        body:
          "Heavy nucleus (²³⁵U, ²³⁹Pu) splits into two smaller nuclei + neutrons + ~200 MeV. Chain reaction: neutrons trigger more fissions. Critical mass: minimum mass for self-sustaining chain reaction. Applications: nuclear power plants (controlled chain reaction with control rods), atomic bombs (uncontrolled).",
      },
      {
        title: "Nuclear Fusion",
        body:
          "Light nuclei combine to form heavier nucleus + energy. Example: ²H + ³H → ⁴He + n + 17.6 MeV. Requires very high temperature (~10⁸ K) to overcome Coulomb barrier. Occurs in stars (proton-proton chain, CNO cycle). Controlled fusion: ITER (tokamak) aims for commercial fusion power.",
      },
      {
        title: "Radioactivity — Alpha, Beta, Gamma Decay",
        body:
          "Alpha decay: ᴬZX → ᴬ⁻⁴Z−₂Y + ⁴₂He + Q. Q-value = (M_parent − M_daughter − M_α)c². Beta decay: n → p + e⁻ + ν̄_e (β⁻). Or p → n + e⁺ + ν_e (β⁺). Electron capture. Gamma decay: excited nucleus emits γ-ray. Law: N = N₀e^(−λt). Half-life T_½ = ln2/λ = 0.693/λ. Mean life τ = 1/λ.",
      },
      {
        title: "Carbon Dating",
        body:
          "¹⁴C (T_½ = 5730 years) produced in atmosphere. Incorporated into living organisms. After death, ¹⁴C decays — ratio ¹⁴C/¹²C decreases. Measuring remaining ¹⁴C gives age up to ~50000 years. Calibration needed due to varying ¹⁴C production over time.",
      },
      {
        title: "Nuclear Reactor",
        body:
          "Components: fuel (²³⁵U), moderator (slows neutrons — heavy water, graphite), control rods (absorb neutrons — boron, cadmium), coolant (water, liquid sodium), shielding (concrete). Types: PWR (pressurised water), BWR, PHWR (CANDU). Breeder reactor: produces more fissile material than it consumes.",
      },
    ],
    keyPoints: [
      "Rutherford model: nucleus + electrons. Atom mostly empty.",
      "Bohr model: quantised orbits. E_n = −13.6/n² eV.",
      "Rydberg formula: 1/λ = R(1/n_f² − 1/n_i²).",
      "Laser: population inversion, stimulated emission, coherent light.",
      "Nuclear size: R = R₀A^(1/3), R₀ = 1.2 × 10⁻¹⁵ m.",
      "Binding energy BE = Δmc². BE/nucleon ≈ 8 MeV (iron peak).",
      "Fission: heavy splits → ~200 MeV. Fusion: light combine → energy.",
      "Radioactive decay: N = N₀e^(−λt). T_½ = ln2/λ.",
      "Carbon dating: ¹⁴C T_½ = 5730 years.",
    ],
    importantQuestions: [
      "Describe Rutherford's alpha scattering experiment. State conclusions and shortcomings of this model.",
      "State Bohr's postulates. Derive radius and energy of nth orbit in hydrogen atom. Draw energy level diagram.",
      "Explain hydrogen spectrum. State spectral series. Calculate wavelength of Hα line (R = 1.097 × 10⁷ m⁻¹).",
      "What is binding energy? Plot BE per nucleon vs mass number. Explain how fission and fusion release energy.",
      "Explain nuclear fission. Draw schematic of a nuclear reactor. What is critical mass?",
      "State laws of radioactive decay. Derive N = N₀e^(−λt). Half-life of ²²⁶Ra is 1600 years. Initial activity 3.7 × 10¹⁰ Bq. Find activity after 3200 years.",
      "Distinguish between nuclear fission and fusion. Conditions required for fusion. Why is fusion difficult to achieve on Earth?",
      "Explain carbon dating. A wooden artefact has 25% ¹⁴C compared to living wood. Find age (T_½ = 5730 years).",
      "What are alpha, beta, gamma decays? Write balanced decay equations for (a) ²³⁸U → α, (b) ¹⁴C → β⁻.",
    ],
  },
  "semiconductor-devices": {
    overview:
      "Semiconductors are materials whose conductivity lies between that of conductors and insulators. But that simple definition hides their true importance — semiconductors are the backbone of modern electronics. Silicon, germanium, and gallium arsenide are the most important. By adding tiny amounts of impurities (doping), we can precisely control their electrical properties. This control gives us diodes, transistors, and integrated circuits — the building blocks of every electronic device.\n\nPure (intrinsic) silicon has a conductivity of about 4.4 × 10⁻⁴ S/m. Doping it with phosphorus (which has 5 valence electrons) creates an n-type semiconductor with excess electrons. Doping with boron (3 valence electrons) creates p-type with excess holes. The hole is a conceptual convenience — it is the absence of an electron, behaving like a positive charge carrier. When p-type and n-type materials are joined, a p-n junction forms. At the junction, electrons and holes diffuse across, creating a depletion region with an internal electric field. This field prevents further diffusion — equilibrium is reached. The crucial point: applying external voltage can either widen or narrow this depletion region.\n\nA p-n junction diode allows current to flow easily in forward bias (positive voltage to p-side) but blocks current in reverse bias. This is rectification — converting AC to DC. Half-wave and full-wave rectifiers power our electronics. Zener diodes are specially designed to break down at a precise voltage without damage — used for voltage regulation.\n\nTransistors are three-terminal semiconductor devices that amplify signals or act as switches. The bipolar junction transistor (BJT) has three layers: n-p-n or p-n-p. A small base current controls a much larger collector current — current gain β = I_C/I_B ≈ 100-300. Field-effect transistors (FETs) use voltage to control current, consuming almost no gate current. Integrated circuits pack millions of transistors on a single chip. Logic gates (AND, OR, NOT, NAND, NOR) built from transistors form the basis of digital electronics — from calculators to supercomputers.",
    concepts: [
      {
        title: "Classification of Solids — Conductors, Semiconductors, Insulators",
        body:
          "Based on energy bands: conductors (no band gap or overlapping bands), semiconductors (small gap ~1 eV), insulators (large gap >3 eV). Elementary band theory: valence band (filled at 0 K) and conduction band (empty at 0 K). For semiconductors: E_g(Si) = 1.12 eV, E_g(Ge) = 0.67 eV, E_g(GaAs) = 1.43 eV.",
      },
      {
        title: "Intrinsic and Extrinsic Semiconductors",
        body:
          "Intrinsic: pure semiconductor, n_i = p_i = 1.5 × 10¹⁰ cm⁻³ (Si at 300 K). Extrinsic: doped with impurities. n-type: pentavalent dopant (P, As, Sb). Majority carriers = electrons. p-type: trivalent dopant (B, Al, In). Majority carriers = holes. Doping level ~ 10¹⁵-10¹⁸ cm⁻³.",
      },
      {
        title: "Formation of p-n Junction",
        body:
          "p-type and n-type joined. Diffusion: electrons → p-side, holes → n-side. Recombination near junction. Depletion region (space charge region) forms. Built-in potential V₀ ≈ 0.7 V (Si), 0.3 V (Ge). Width ~ 0.1-1 µm. No external bias: net current = 0 (drift and diffusion currents balance).",
      },
      {
        title: "Forward and Reverse Bias of p-n Junction",
        body:
          "Forward bias: p to +ve, n to −ve. Depletion width decreases, barrier height reduces. Current increases exponentially: I = I₀[e^(eV/kT) − 1]. Reverse bias: p to −ve, n to +ve. Depletion width increases. Very small current I₀ (saturation current). Break-down at high reverse voltage.",
      },
      {
        title: "Rectification — Half-Wave and Full-Wave",
        body:
          "Half-wave rectifier: single diode, conducts only one half-cycle. Ripple factor = 1.21. Efficiency = 40.6%. Full-wave: centre-tap or bridge (4 diodes). Conducts both half-cycles. Ripple factor = 0.48. Efficiency = 81.2%. Filter capacitor smooths output. Zener diode regulates voltage.",
      },
      {
        title: "Zener Diode and Voltage Regulation",
        body:
          "Zener diode operates in reverse breakdown region (Zener or avalanche). Zener voltage V_Z precisely controlled by doping. Breakdown is sharp and non-destructive. Used as voltage regulator: series resistor limits current, Zener maintains constant voltage across load. V_out = V_Z regardless of input voltage or load changes (within limits).",
      },
      {
        title: "Photodiode and Solar Cell",
        body:
          "Photodiode: reverse-biased p-n junction. Light generates electron-hole pairs → reverse current increases. Current ∝ light intensity. Fast response (~ns). Applications: light sensors, optical communication. Solar cell: no external bias. Light creates electron-hole pairs separated by built-in field → photovoltage. Open circuit voltage ~0.5-0.6 V (Si). Efficiency ~15-25%.",
      },
      {
        title: "Light-Emitting Diode (LED)",
        body:
          "Forward-biased p-n junction: electrons and holes recombine, emitting photons. Energy of photon = E_g (approximately). Colour determined by band gap: GaAs (infrared), GaAsP (red, yellow), GaP (green), GaN (blue, white). Advantages: low power, long life, fast switching. Used in displays, indicators, lighting.",
      },
      {
        title: "Bipolar Junction Transistor (BJT)",
        body:
          "Three layers: n-p-n or p-n-p. Three terminals: emitter (E), base (B), collector (C). Emitter heavily doped, base thin and lightly doped, collector moderately doped. Common base and common emitter configurations. Active mode: emitter-base forward biased, collector-base reverse biased. Current gain: α = I_C/I_E ≈ 0.95-0.99 (common base). β = I_C/I_B = α/(1−α) ≈ 50-200 (common emitter).",
      },
      {
        title: "Transistor as an Amplifier (Common Emitter)",
        body:
          "Small base current I_B controls large collector current I_C = βI_B. Input signal at base. Output at collector. Voltage gain A_V = −R_C/R_E (approximately). Input resistance: r_be ≈ 1-2 kΩ. Output resistance: r_ce ≈ 50-100 kΩ. CE amplifier needs proper biasing (voltage divider bias) and coupling capacitors.",
      },
      {
        title: "Transistor as a Switch",
        body:
          "Cut-off: V_BE < 0.7 V (Si), I_B = 0, I_C = 0 → switch OFF. Saturation: V_CE ≈ 0.2 V, I_C = (V_CC − V_CEsat)/R_C → switch ON. Very fast switching (ns). Application: digital logic gates. Input 0 V → output V_CC. Input 5 V → output 0 V (inverter).",
      },
      {
        title: "Logic Gates — NOT, AND, OR, NAND, NOR",
        body:
          "NOT (inverter): output = NOT input. AND: output = 1 only if all inputs 1. OR: output = 1 if any input 1. NAND: AND followed by NOT (universal gate). NOR: OR followed by NOT (universal gate). Truth tables and Boolean expressions. NAND and NOR are universal — any logic can be built from either one.",
      },
      {
        title: "Integrated Circuits (ICs)",
        body:
          "Many transistors, resistors, capacitors on a single chip (silicon). SSI (<100 gates), MSI (100-3000), LSI (3000-100000), VLSI (100000+). Moore's law: transistor count doubles ~2 years. Fabrication: photolithography, doping, metallisation. Modern CPU: billions of transistors. ICs reduced size, cost, and power consumption dramatically.",
      },
      {
        title: "Field Effect Transistor (FET) — JFET and MOSFET",
        body:
          "JFET: voltage-controlled device. Gate-source voltage controls channel width → drain current. Input impedance ~10⁸-10⁹ Ω. MOSFET: gate insulated by SiO₂. Very high input impedance ~10¹⁵ Ω. Enhancement and depletion types. CMOS (complementary MOS): low power consumption. Used in most modern digital ICs.",
      },
    ],
    keyPoints: [
      "Band gap: Si 1.12 eV, Ge 0.67 eV, GaAs 1.43 eV.",
      "n-type: pentavalent dopant (excess electrons). p-type: trivalent (excess holes).",
      "p-n junction: depletion region, built-in potential V₀ ≈ 0.7 V (Si).",
      "Diode: I = I₀[e^(eV/kT) − 1]. Forward: conducts. Reverse: blocks.",
      "Zener diode: voltage regulator in reverse breakdown.",
      "Transistor: β = I_C/I_B ≈ 100-300. α = I_C/I_E.",
      "CE amplifier: high voltage gain. Transistor switch: cut-off/saturation.",
      "Logic gates: NOT, AND, OR, NAND, NOR. NAND/NOR are universal.",
      "MOSFET: high input impedance, CMOS for low power.",
    ],
    importantQuestions: [
      "Explain formation of p-n junction. Describe forward and reverse bias with V-I characteristic.",
      "What is rectification? Explain working of a full-wave bridge rectifier with circuit diagram and input-output waveforms.",
      "Explain working of a Zener diode as voltage regulator. Draw circuit. A 12 V Zener with series resistor 200 Ω, input 18 V, load 500 Ω. Find Zener current and load voltage.",
      "Explain working of n-p-n transistor in common emitter configuration as an amplifier. Derive voltage gain.",
      "Explain transistor as a switch. A CE circuit with V_CC = 12 V, R_C = 1 kΩ, β = 100. Find I_B and V_CE when V_BE = 0.7 V and input is 5 V through 10 kΩ base resistor. Is transistor saturated?",
      "What are logic gates? Draw truth tables and logic symbols for AND, OR, NOT, NAND, NOR. Show that NAND is a universal gate.",
      "Distinguish between intrinsic and extrinsic semiconductors. Explain doping and how n-type and p-type are formed.",
      "Explain working of LED and photodiode. What determines the colour of an LED?",
      "Describe construction and working of a MOSFET. State advantages over BJT.",
    ],
  },

};
export default content;
