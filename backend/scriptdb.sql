USE [master]
GO
/****** Object:  Database [CorazonPeludoDB]    Script Date: 16/4/2024 6:08:59 p. m. ******/
CREATE DATABASE [CorazonPeludoDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CorazonPeludoDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CorazonPeludoDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CorazonPeludoDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CorazonPeludoDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [CorazonPeludoDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CorazonPeludoDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CorazonPeludoDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CorazonPeludoDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CorazonPeludoDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CorazonPeludoDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CorazonPeludoDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET RECOVERY FULL 
GO
ALTER DATABASE [CorazonPeludoDB] SET  MULTI_USER 
GO
ALTER DATABASE [CorazonPeludoDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CorazonPeludoDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CorazonPeludoDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CorazonPeludoDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CorazonPeludoDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CorazonPeludoDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'CorazonPeludoDB', N'ON'
GO
ALTER DATABASE [CorazonPeludoDB] SET QUERY_STORE = OFF
GO
USE [CorazonPeludoDB]
GO
/****** Object:  User [lucranog]    Script Date: 16/4/2024 6:09:00 p. m. ******/
CREATE USER [lucranog] FOR LOGIN [lucranog] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [lucranog]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [lucranog]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [lucranog]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [lucranog]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [lucranog]
GO
ALTER ROLE [db_datareader] ADD MEMBER [lucranog]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [lucranog]
GO
/****** Object:  Table [dbo].[actividad_economica]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[actividad_economica](
	[actividadEconomicaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_5fa6533433e25d978df1ff5d18b] PRIMARY KEY CLUSTERED 
(
	[actividadEconomicaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[alimento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[alimento](
	[alimentoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[contenido] [int] NOT NULL,
	[unidadMedida] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoAlimentoTipoAlimentoId] [int] NULL,
 CONSTRAINT [PK_4f51d6b8d88fbd2ac46c8a565bd] PRIMARY KEY CLUSTERED 
(
	[alimentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[almacen]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[almacen](
	[almacenId] [int] IDENTITY(1,1) NOT NULL,
	[capacidad] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[surcusalSucursalId] [int] NULL,
 CONSTRAINT [PK_ba2d677f2fc4809b5c57bc8da42] PRIMARY KEY CLUSTERED 
(
	[almacenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[animal]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal](
	[animalId] [int] IDENTITY(1,1) NOT NULL,
	[alias] [nvarchar](255) NOT NULL,
	[identificador] [int] NOT NULL,
	[foto] [nvarchar](255) NOT NULL,
	[edad] [int] NOT NULL,
	[altura] [int] NOT NULL,
	[peso] [int] NOT NULL,
	[sexo] [nvarchar](255) NOT NULL,
	[origen] [int] NOT NULL,
	[estado] [int] NOT NULL,
	[fechaIngreso] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[especieEspecieId] [int] NULL,
	[rasgosFisicosRasgosFísicosId] [int] NULL,
 CONSTRAINT [PK_07dfc62b69bf879474cc3813460] PRIMARY KEY CLUSTERED 
(
	[animalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[as]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[as](
	[asId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_0bf0afd69b49d153add25cbd88a] PRIMARY KEY CLUSTERED 
(
	[asId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[as2]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[as2](
	[as2Id] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_0423c916e329aefaa3b034fdf30] PRIMARY KEY CLUSTERED 
(
	[as2Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[asignacion_recursos]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[asignacion_recursos](
	[id] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tareaAsignacionTareaId] [int] NULL,
	[productoProductoId] [int] NULL,
	[estadoEstadoId] [int] NULL,
	[tipoRecursoTipoRecursoId] [int] NULL,
 CONSTRAINT [PK_4bca53ee263f83baef475295c54] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[asignacion_tarea]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[asignacion_tarea](
	[asignacionTareaId] [int] IDENTITY(1,1) NOT NULL,
	[fechaInicio] [datetime] NOT NULL,
	[fechaLimite] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tareaTareaId] [int] NULL,
	[empleadoEmpleadoId] [int] NULL,
	[estadoEstadoId] [int] NULL,
	[ubicacionDireccionId] [int] NULL,
	[nivelUrgenciaNivelUrgenciaId] [int] NULL,
	[tipoRecursoTipoRecursoId] [int] NULL,
 CONSTRAINT [PK_d92ff4dbbd10691ae069cb25cfc] PRIMARY KEY CLUSTERED 
(
	[asignacionTareaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cirugia]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cirugia](
	[id] [int] NOT NULL,
	[duracion] [int] NOT NULL,
	[fechaProgramada] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tratamientoTratamientoId] [int] NULL,
	[personaPersonaId] [int] NULL,
	[animalAnimalId] [int] NULL,
 CONSTRAINT [PK_a26d274370944809f71c2ffa949] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cita]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cita](
	[citaId] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[hora] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[personaPersonaId] [int] NULL,
	[estadoEstadoId] [int] NULL,
 CONSTRAINT [PK_2e65f3ada2c38a48241a056dc9d] PRIMARY KEY CLUSTERED 
(
	[citaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[complejidad]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[complejidad](
	[complejidadId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_225fb58351340570e38e4506ac4] PRIMARY KEY CLUSTERED 
(
	[complejidadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[complicaciones]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[complicaciones](
	[complicacionesId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_5ea26c175043f6101ac6f75a782] PRIMARY KEY CLUSTERED 
(
	[complicacionesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[diagnostico]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[diagnostico](
	[id] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[historialHistorialMedicoId] [int] NULL,
	[enfermedadEnfermedadId] [int] NULL,
 CONSTRAINT [PK_4c5187825c9dfee85191f77cf72] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[direccion]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[direccion](
	[direccionId] [int] IDENTITY(1,1) NOT NULL,
	[calle] [nvarchar](255) NOT NULL,
	[sector] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_b4a8f829178e63dbdb3e0e2a769] PRIMARY KEY CLUSTERED 
(
	[direccionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[donacion]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[donacion](
	[donacionId] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[donadorPersonaId] [int] NULL,
	[tipoDonacionTipoDonacionId] [int] NULL,
 CONSTRAINT [PK_516682d2be54af40ad37c199350] PRIMARY KEY CLUSTERED 
(
	[donacionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[efectos_secundarios]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[efectos_secundarios](
	[efectosSecundariosId] [int] IDENTITY(1,1) NOT NULL,
	[duracion] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[sintomaSintomaId] [int] NULL,
 CONSTRAINT [PK_e25ecd0915da8b9676cd1b4b6d7] PRIMARY KEY CLUSTERED 
(
	[efectosSecundariosId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[empleado]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[empleado](
	[EmpleadoId] [int] IDENTITY(1,1) NOT NULL,
	[sueldo] [int] NOT NULL,
	[fechaIngreso] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[personaPersonaId] [int] NULL,
	[surcusalSucursalId] [int] NULL,
	[tipoEmpleadoTipoEmpleadoId] [int] NULL,
	[puesto] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_ad14475cf2770b4edfb998fe4af] PRIMARY KEY CLUSTERED 
(
	[EmpleadoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[enfermedad]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[enfermedad](
	[EnfermedadId] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](255) NOT NULL,
	[tipoEnfermedadTipoEnfermedadId] [int] NULL,
	[prevalencia] [nvarchar](255) NOT NULL,
	[porcientoMortalidad] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_88b5893b827a3453e986a8c9df1] PRIMARY KEY CLUSTERED 
(
	[EnfermedadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[enfermedad_xsintomas]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[enfermedad_xsintomas](
	[id] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[enfermedadEnfermedadId] [int] NULL,
	[sintomaSintomaId] [int] NULL,
 CONSTRAINT [PK_981be5ebaf00359c755a6f11bd6] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[enfermedad_xtartamiento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[enfermedad_xtartamiento](
	[id] [int] NOT NULL,
	[duracion] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[enfermedadEnfermedadId] [int] NULL,
	[tratamientoTratamientoId] [int] NULL,
 CONSTRAINT [PK_59411be13d42943751a09e272af] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[especie]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[especie](
	[especieId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_00a1783cb6ab31e64fd5f7026a4] PRIMARY KEY CLUSTERED 
(
	[especieId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estado]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estado](
	[estadoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_e48fef7fd07fb6eda14e0de8423] PRIMARY KEY CLUSTERED 
(
	[estadoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estado_civil]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estado_civil](
	[estadoCivilId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_12df3fdbe7b1e111f53e8ce71cc] PRIMARY KEY CLUSTERED 
(
	[estadoCivilId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estado_emergencia]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estado_emergencia](
	[estadoEmergenciaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_d351a401723f99b78cb7bcf1e5b] PRIMARY KEY CLUSTERED 
(
	[estadoEmergenciaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estado_lugar]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estado_lugar](
	[estadoLugarId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_4630431eef0571e76e5dc654d66] PRIMARY KEY CLUSTERED 
(
	[estadoLugarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estado_salud]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estado_salud](
	[estadoSaludId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_7d6c3bbf746c215df7c4e291b2a] PRIMARY KEY CLUSTERED 
(
	[estadoSaludId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[historial_alimentacion]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[historial_alimentacion](
	[historialMedicoId] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[animalAnimalId] [int] NULL,
	[veterinarioEmpleadoId] [int] NULL,
 CONSTRAINT [PK_f1e0d7a70813402d04513212594] PRIMARY KEY CLUSTERED 
(
	[historialMedicoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[historial_mantenimiento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[historial_mantenimiento](
	[historialMantenimientoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_99a3f9062cc47b75013c285f519] PRIMARY KEY CLUSTERED 
(
	[historialMantenimientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[historial_medicamento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[historial_medicamento](
	[historialMedicamentoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_9346b2cca6e709600e4b5134206] PRIMARY KEY CLUSTERED 
(
	[historialMedicamentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[historial_medico]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[historial_medico](
	[historialMedicoId] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[animalAnimalId] [int] NULL,
	[veterinarioEmpleadoId] [int] NULL,
	[estadoSaludEstadoSaludId] [int] NULL,
	[polizaSeguroPolizaSeguroId] [int] NULL,
 CONSTRAINT [PK_d6569baf7a233e65fc42af464ad] PRIMARY KEY CLUSTERED 
(
	[historialMedicoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[historial_vacunas]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[historial_vacunas](
	[id] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[historialHistorialMedicoId] [int] NULL,
	[vacunaVacunaId] [int] NULL,
	[personaPersonaId] [int] NULL,
 CONSTRAINT [PK_90c60ee8cd4f7dcc8073c21a90d] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[indentificador]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[indentificador](
	[indentificadorId] [int] IDENTITY(1,1) NOT NULL,
	[codigoBarra] [nvarchar](255) NOT NULL,
	[tipoIdentificador] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_7f98dea8cb43fff87aff3d99040] PRIMARY KEY CLUSTERED 
(
	[indentificadorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[log_acciones]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[log_acciones](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[hora] [datetime] NOT NULL,
	[origen] [nvarchar](255) NOT NULL,
	[datosAntesdelCambio] [nvarchar](255) NOT NULL,
	[datosDespuesdelCambio] [nvarchar](255) NOT NULL,
	[usuarioUsuarioId] [int] NULL,
	[surcusalSucursalId] [int] NULL,
 CONSTRAINT [PK_f498f11ceed04607bcd356abc46] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[mantenimiento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mantenimiento](
	[mantenimientoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoMantenimientoTipoMantenimientoId] [int] NULL,
 CONSTRAINT [PK_b86df656f5f2d99713c54a7ba91] PRIMARY KEY CLUSTERED 
(
	[mantenimientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[marca]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[marca](
	[marcaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_abd81a86ff2a058edbd9d53b58c] PRIMARY KEY CLUSTERED 
(
	[marcaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[medicamento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[medicamento](
	[medicamentoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[laboratorio] [nvarchar](255) NOT NULL,
	[productoProductoId] [int] NULL,
	[tipoMedicamentoTipoMedicamentoId] [int] NULL,
	[viaAdministracionViaAdministracionId] [int] NULL,
 CONSTRAINT [PK_42dc4bdf0e235ee0c97851c645a] PRIMARY KEY CLUSTERED 
(
	[medicamentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[medicamento_xespecie]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[medicamento_xespecie](
	[id] [int] NOT NULL,
	[esPrincipal] [bit] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[especieEspecieId] [int] NULL,
	[medicamentoMedicamentoId] [int] NULL,
 CONSTRAINT [PK_48572981ac03601420317e6e1b6] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[mision]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mision](
	[misionId] [int] IDENTITY(1,1) NOT NULL,
	[fechaInicio] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[solicitudSolicitudId] [int] NULL,
	[estadoEstadoId] [int] NULL,
 CONSTRAINT [PK_5d8925e8d0b34666d96c614191c] PRIMARY KEY CLUSTERED 
(
	[misionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[modelo]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[modelo](
	[modeloId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[marcaMarcaId] [int] NULL,
 CONSTRAINT [PK_ea6f9f258667d3be2095b394c82] PRIMARY KEY CLUSTERED 
(
	[modeloId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nivel_urgencia]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nivel_urgencia](
	[nivelUrgenciaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_f2fa46a69e53b901a376bf65759] PRIMARY KEY CLUSTERED 
(
	[nivelUrgenciaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[origen]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[origen](
	[origenId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_e1ac908a339990a9cb52786bff1] PRIMARY KEY CLUSTERED 
(
	[origenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persona]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persona](
	[personaId] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](255) NOT NULL,
	[apellido] [nvarchar](255) NOT NULL,
	[email] [nvarchar](255) NOT NULL,
	[foto] [nvarchar](255) NOT NULL,
	[rnc] [nvarchar](255) NOT NULL,
	[cedula] [nvarchar](255) NOT NULL,
	[licenciaConducir] [nvarchar](255) NOT NULL,
	[sexo] [nvarchar](255) NOT NULL,
	[genero] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoPersonaTipoPersonaId] [int] NULL,
	[direccionDireccionId] [int] NULL,
	[estadoCivilEstadoCivilId] [int] NULL,
	[tipoEmpresaTipoEmpresaId] [int] NULL,
	[pasaporte] [nvarchar](255) NOT NULL,
	[fechaNacimiento] [datetime] NOT NULL,
 CONSTRAINT [PK_8253e6f49429985de3df87a5636] PRIMARY KEY CLUSTERED 
(
	[personaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persona_xtelefono]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persona_xtelefono](
	[id] [int] NOT NULL,
	[esPrincipal] [bit] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[personaPersonaId] [int] NULL,
	[telefonoTelefonoId] [int] NULL,
 CONSTRAINT [PK_928dbd0163f2ad73d00797ff902] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[poliza_seguro]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[poliza_seguro](
	[polizaSeguroId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[companiaPersonaId] [int] NULL,
 CONSTRAINT [PK_b89826adf929098f3026c89f5a3] PRIMARY KEY CLUSTERED 
(
	[polizaSeguroId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[post_adopcion]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[post_adopcion](
	[postAdopcionId] [int] IDENTITY(1,1) NOT NULL,
	[fechaInicio] [datetime] NOT NULL,
	[condicionAnimal] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[adopcionProcesoAdopcionId] [int] NULL,
	[estadoEstadoId] [int] NULL,
 CONSTRAINT [PK_11b4e5a3ec5c57e7225d5186105] PRIMARY KEY CLUSTERED 
(
	[postAdopcionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proceso_adopcion]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proceso_adopcion](
	[procesoAdopcionId] [int] IDENTITY(1,1) NOT NULL,
	[fechaInicio] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[solicitudSolicitudId] [int] NULL,
	[animalAnimalId] [int] NULL,
	[estadoEstadoId] [int] NULL,
 CONSTRAINT [PK_68bca035d51bf233041fa592ed1] PRIMARY KEY CLUSTERED 
(
	[procesoAdopcionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[producto]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[producto](
	[productoId] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](255) NOT NULL,
	[lote] [nvarchar](255) NOT NULL,
	[tipoProductoTipoProductoId] [int] NULL,
	[costo] [int] NOT NULL,
	[fechaVencimiento] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[marcaMarcaId] [int] NULL,
 CONSTRAINT [PK_208e8347095835ee15fe2af9cae] PRIMARY KEY CLUSTERED 
(
	[productoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[producto_xalmacen]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[producto_xalmacen](
	[id] [int] NOT NULL,
	[existencia] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[productoProductoId] [int] NULL,
	[almacenAlmacenId] [int] NULL,
 CONSTRAINT [PK_355f3c9238c2112d80875d28448] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proveedor]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proveedor](
	[proveedorId] [int] IDENTITY(1,1) NOT NULL,
	[tipoCredito] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[personaPersonaId] [int] NULL,
 CONSTRAINT [PK_803160041f379bbe129647411e1] PRIMARY KEY CLUSTERED 
(
	[proveedorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[proveedor_xproducto]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proveedor_xproducto](
	[id] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[proveedorProveedorId] [int] NULL,
	[productoProductoId] [int] NULL,
 CONSTRAINT [PK_07ef215cf4468dc63788975201e] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rasgos_fisicos]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rasgos_fisicos](
	[rasgosFísicosId] [int] IDENTITY(1,1) NOT NULL,
	[amputaciones] [bit] NOT NULL,
	[tipoAmputacion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoPielTipoPielId] [int] NULL,
 CONSTRAINT [PK_e058b5114f0153fc4f931d196d7] PRIMARY KEY CLUSTERED 
(
	[rasgosFísicosId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rasgos_físicos]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rasgos_físicos](
	[rasgosFísicosId] [int] IDENTITY(1,1) NOT NULL,
	[amputaciones] [bit] NOT NULL,
	[tipoAmputacion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoPielTipoPielId] [int] NULL,
 CONSTRAINT [PK_739b2ba4d33a0073cadb18ab1f8] PRIMARY KEY CLUSTERED 
(
	[rasgosFísicosId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sintoma]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sintoma](
	[sintomaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoSintomaTipoSintomaId] [int] NULL,
 CONSTRAINT [PK_ee74fbc4eef712899d482583d15] PRIMARY KEY CLUSTERED 
(
	[sintomaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[solicitante]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[solicitante](
	[SolicitanteId] [int] IDENTITY(1,1) NOT NULL,
	[situacionFamiliar] [int] NOT NULL,
	[ingresosMensuales] [int] NOT NULL,
	[dependencia] [bit] NOT NULL,
	[numeroDependientes] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[personaPersonaId] [int] NULL,
	[actividadEconomicaActividadEconomicaId] [int] NULL,
 CONSTRAINT [PK_4b35b4226af276b364fa7c4d637] PRIMARY KEY CLUSTERED 
(
	[SolicitanteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[solicitud]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[solicitud](
	[SolicitudId] [int] IDENTITY(1,1) NOT NULL,
	[fechaCreacion] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[solicitanteSolicitanteId] [int] NULL,
	[estadoEstadoId] [int] NULL,
	[surcusalSucursalId] [int] NULL,
 CONSTRAINT [PK_fe7d47ff8c9425c7ede68348836] PRIMARY KEY CLUSTERED 
(
	[SolicitudId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[solicitud_r]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[solicitud_r](
	[SolicitudId] [int] IDENTITY(1,1) NOT NULL,
	[fechaCreacion] [datetime] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[animalAnimalId] [int] NULL,
	[remitentePersonaId] [int] NULL,
	[estadoLugarEstadoLugarId] [int] NULL,
	[nivelUrgenciaNivelUrgenciaId] [int] NULL,
	[estadoEmergenciaEstadoEmergenciaId] [int] NULL,
	[estadoEstadoId] [int] NULL,
	[ubicacionDireccionId] [int] NULL,
	[surcusalSucursalId] [int] NULL,
 CONSTRAINT [PK_0aeafde7fe682aeae5842fe67b1] PRIMARY KEY CLUSTERED 
(
	[SolicitudId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sucursal]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sucursal](
	[sucursalId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[companiaPersonaId] [int] NULL,
 CONSTRAINT [PK_e72184086c49fec9abb262ccdf5] PRIMARY KEY CLUSTERED 
(
	[sucursalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tarea]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tarea](
	[tareaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoTareaTipoTareaId] [int] NULL,
	[complejidadComplejidadId] [int] NULL,
 CONSTRAINT [PK_00765e12b5a84dc93164f725ad8] PRIMARY KEY CLUSTERED 
(
	[tareaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[telefono]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[telefono](
	[telefonoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[extension] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoTelefonoTipoTelefonoId] [int] NULL,
 CONSTRAINT [PK_0dd61dde1877fa4f713211772c7] PRIMARY KEY CLUSTERED 
(
	[telefonoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_alimento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_alimento](
	[tipoAlimentoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_c4486a09a4215dc89e2381b7e70] PRIMARY KEY CLUSTERED 
(
	[tipoAlimentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_combustible]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_combustible](
	[tipoCombustibleId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_6481f9ecfa7bdb95243d2472a5a] PRIMARY KEY CLUSTERED 
(
	[tipoCombustibleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_donacion]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_donacion](
	[tipoDonacionId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_ae35c29dfcc6c822a722d1937a4] PRIMARY KEY CLUSTERED 
(
	[tipoDonacionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_empleado]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_empleado](
	[tipoEmpleadoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_0e7a63df2f478793e71876079a8] PRIMARY KEY CLUSTERED 
(
	[tipoEmpleadoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_empresa]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_empresa](
	[tipoEmpresaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_ac199672e8e7bb91f6d8a9099c7] PRIMARY KEY CLUSTERED 
(
	[tipoEmpresaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_enfermedad]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_enfermedad](
	[tipoEnfermedadId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_23c4d4e6b3efd73bdd38b568f34] PRIMARY KEY CLUSTERED 
(
	[tipoEnfermedadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_mantenimiento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_mantenimiento](
	[tipoMantenimientoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_636e265fc860d2e9211d9e5204b] PRIMARY KEY CLUSTERED 
(
	[tipoMantenimientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_medicamento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_medicamento](
	[tipoMedicamentoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_74c743418831f9d95fa963d6743] PRIMARY KEY CLUSTERED 
(
	[tipoMedicamentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_persona]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_persona](
	[tipoPersonaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_87068d7c3e47727cc24566d131a] PRIMARY KEY CLUSTERED 
(
	[tipoPersonaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_piel]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_piel](
	[tipoPielId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_2eb7176e9c12665fe8367bf6077] PRIMARY KEY CLUSTERED 
(
	[tipoPielId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_producto]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_producto](
	[tipoProductoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_cdcbef975a6b7b7e009414bd3df] PRIMARY KEY CLUSTERED 
(
	[tipoProductoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_recurso]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_recurso](
	[tipoRecursoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_4132c8061e73fdda0ad4f6149a7] PRIMARY KEY CLUSTERED 
(
	[tipoRecursoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_sintoma]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_sintoma](
	[tipoSintomaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_59226381cd14332d399a1af6758] PRIMARY KEY CLUSTERED 
(
	[tipoSintomaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_tarea]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_tarea](
	[tipoTareaId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_bcc7f86601acc5580a4142e7a00] PRIMARY KEY CLUSTERED 
(
	[tipoTareaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_telefono]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_telefono](
	[tipoTelefonoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_273b882761ed59cd97f256a3d1d] PRIMARY KEY CLUSTERED 
(
	[tipoTelefonoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_tratamiento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_tratamiento](
	[tipoTratamientoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_5d55b4b6124eae57f1d383da9a2] PRIMARY KEY CLUSTERED 
(
	[tipoTratamientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_usuario]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_usuario](
	[tipoUsuarioId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_f3dd4d6e7bc8fa1056aaadacb38] PRIMARY KEY CLUSTERED 
(
	[tipoUsuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_vehiculo]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_vehiculo](
	[tipoVehiculoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_ce55f3fa4b433693650dc61f6d5] PRIMARY KEY CLUSTERED 
(
	[tipoVehiculoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tratamiento]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tratamiento](
	[tratamientoId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoTratamientoTipoTratamientoId] [int] NULL,
 CONSTRAINT [PK_d5aca382e83526d02a3497428ea] PRIMARY KEY CLUSTERED 
(
	[tratamientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[usuarioId] [int] IDENTITY(1,1) NOT NULL,
	[userName] [nvarchar](255) NOT NULL,
	[password] [nvarchar](255) NOT NULL,
	[email] [nvarchar](255) NOT NULL,
	[foto] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoUsuarioTipoUsuarioId] [int] NULL,
	[surcusalSucursalId] [int] NULL,
 CONSTRAINT [PK_3c54fa6dc8ea47587ea5b09aab5] PRIMARY KEY CLUSTERED 
(
	[usuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[vacuna]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[vacuna](
	[vacunaId] [int] IDENTITY(1,1) NOT NULL,
	[edadMinima] [int] NOT NULL,
	[edadMaxima] [int] NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[medicamentoMedicamentoId] [int] NULL,
 CONSTRAINT [PK_921bca0afce99967d98a1ffbbe5] PRIMARY KEY CLUSTERED 
(
	[vacunaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[vehiculo]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[vehiculo](
	[vehiculoId] [int] IDENTITY(1,1) NOT NULL,
	[numeroChasis] [nvarchar](255) NOT NULL,
	[placa] [nvarchar](255) NOT NULL,
	[es4x4] [bit] NOT NULL,
	[anio] [int] NOT NULL,
	[kilometrajeMaximo] [int] NOT NULL,
	[capacidadPasajeros] [int] NOT NULL,
	[capacidadCarga] [int] NOT NULL,
	[color] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
	[tipoVehiculoTipoVehiculoId] [int] NULL,
	[tipoCombustibleTipoCombustibleId] [int] NULL,
 CONSTRAINT [PK_a7576c8552c48dd33316f7b4463] PRIMARY KEY CLUSTERED 
(
	[vehiculoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[via_administracion]    Script Date: 16/4/2024 6:09:01 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[via_administracion](
	[viaAdministracionId] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [nvarchar](255) NOT NULL,
	[fechaModificacion] [datetime] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_7e0ddfea288bc96b39e7c1b9420] PRIMARY KEY CLUSTERED 
(
	[viaAdministracionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [REL_924064d14f190f05a1c2d4c989]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_924064d14f190f05a1c2d4c989] ON [dbo].[empleado]
(
	[personaPersonaId] ASC
)
WHERE ([personaPersonaId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_30c09cec171018834dbc240f92]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_30c09cec171018834dbc240f92] ON [dbo].[enfermedad_xsintomas]
(
	[sintomaSintomaId] ASC
)
WHERE ([sintomaSintomaId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_cb17aacdf456f4e17333f98f38]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_cb17aacdf456f4e17333f98f38] ON [dbo].[enfermedad_xsintomas]
(
	[enfermedadEnfermedadId] ASC
)
WHERE ([enfermedadEnfermedadId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_441dc2313562a3f45cd001cd85]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_441dc2313562a3f45cd001cd85] ON [dbo].[enfermedad_xtartamiento]
(
	[enfermedadEnfermedadId] ASC
)
WHERE ([enfermedadEnfermedadId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_46d9b165a241dece2fe8f9461a]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_46d9b165a241dece2fe8f9461a] ON [dbo].[enfermedad_xtartamiento]
(
	[tratamientoTratamientoId] ASC
)
WHERE ([tratamientoTratamientoId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_2e13b08be7ce5aee9f13502464]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_2e13b08be7ce5aee9f13502464] ON [dbo].[medicamento_xespecie]
(
	[especieEspecieId] ASC
)
WHERE ([especieEspecieId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_3da39c88bcef2979630270320b]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_3da39c88bcef2979630270320b] ON [dbo].[medicamento_xespecie]
(
	[medicamentoMedicamentoId] ASC
)
WHERE ([medicamentoMedicamentoId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_108238e4fab814f34dabd1a84e]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_108238e4fab814f34dabd1a84e] ON [dbo].[modelo]
(
	[marcaMarcaId] ASC
)
WHERE ([marcaMarcaId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_0d8e5299a34aa1a1a450442733]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_0d8e5299a34aa1a1a450442733] ON [dbo].[persona_xtelefono]
(
	[personaPersonaId] ASC
)
WHERE ([personaPersonaId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_3209a0ea7c2f4992e8432be844]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_3209a0ea7c2f4992e8432be844] ON [dbo].[persona_xtelefono]
(
	[telefonoTelefonoId] ASC
)
WHERE ([telefonoTelefonoId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_88689feafdaea41afa344a2640]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_88689feafdaea41afa344a2640] ON [dbo].[poliza_seguro]
(
	[companiaPersonaId] ASC
)
WHERE ([companiaPersonaId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_a5097a3714cca5a5f479c8d6f9]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_a5097a3714cca5a5f479c8d6f9] ON [dbo].[post_adopcion]
(
	[adopcionProcesoAdopcionId] ASC
)
WHERE ([adopcionProcesoAdopcionId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_3dad3f0bbba5b57de95c01a0f6]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_3dad3f0bbba5b57de95c01a0f6] ON [dbo].[proceso_adopcion]
(
	[animalAnimalId] ASC
)
WHERE ([animalAnimalId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_fab7d20cbf3667ffb5fb04e198]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_fab7d20cbf3667ffb5fb04e198] ON [dbo].[proceso_adopcion]
(
	[solicitudSolicitudId] ASC
)
WHERE ([solicitudSolicitudId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_2d2318ce8ac8b00fa5359fc775]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_2d2318ce8ac8b00fa5359fc775] ON [dbo].[producto_xalmacen]
(
	[almacenAlmacenId] ASC
)
WHERE ([almacenAlmacenId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_8a51bbabdf7fa552b0599a40cd]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_8a51bbabdf7fa552b0599a40cd] ON [dbo].[producto_xalmacen]
(
	[productoProductoId] ASC
)
WHERE ([productoProductoId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_5c9780a20d7e74b4e228e82f9a]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_5c9780a20d7e74b4e228e82f9a] ON [dbo].[proveedor_xproducto]
(
	[proveedorProveedorId] ASC
)
WHERE ([proveedorProveedorId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_f3d2055193fba36c3b29d97d3b]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_f3d2055193fba36c3b29d97d3b] ON [dbo].[proveedor_xproducto]
(
	[productoProductoId] ASC
)
WHERE ([productoProductoId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_c4f508d5c7d244f5dd8453488e]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_c4f508d5c7d244f5dd8453488e] ON [dbo].[rasgos_físicos]
(
	[tipoPielTipoPielId] ASC
)
WHERE ([tipoPielTipoPielId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_1cffdf0abda36e7f983f65fd4b]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_1cffdf0abda36e7f983f65fd4b] ON [dbo].[solicitante]
(
	[personaPersonaId] ASC
)
WHERE ([personaPersonaId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_bc5598e0cb30fbeb21195aff22]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_bc5598e0cb30fbeb21195aff22] ON [dbo].[vehiculo]
(
	[tipoCombustibleTipoCombustibleId] ASC
)
WHERE ([tipoCombustibleTipoCombustibleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [REL_f38cc1cb36e540f7a74a63f41d]    Script Date: 16/4/2024 6:09:01 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [REL_f38cc1cb36e540f7a74a63f41d] ON [dbo].[vehiculo]
(
	[tipoVehiculoTipoVehiculoId] ASC
)
WHERE ([tipoVehiculoTipoVehiculoId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[actividad_economica] ADD  CONSTRAINT [DF_d296ae5ed160fe84f8d30d4f5eb]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[alimento] ADD  CONSTRAINT [DF_071b42dd6cde25470a76808ef7c]  DEFAULT ((0)) FOR [contenido]
GO
ALTER TABLE [dbo].[alimento] ADD  CONSTRAINT [DF_3058d7b8f16500f7c627dcc54f9]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[almacen] ADD  CONSTRAINT [DF_4aa6887ee15b7dc0151f7352d8c]  DEFAULT ((0)) FOR [capacidad]
GO
ALTER TABLE [dbo].[almacen] ADD  CONSTRAINT [DF_94e7a0f2ecd4d7da216d9e1f3b0]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[animal] ADD  CONSTRAINT [DF_2e34710250fe928e8cacb82ab8f]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[as] ADD  CONSTRAINT [DF_7a2452ade523d5c7326673e43d4]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[as2] ADD  CONSTRAINT [DF_28ed53a67347c5c86bbd42c47c9]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[asignacion_recursos] ADD  CONSTRAINT [DF_444cd337210d50df1bb911026b4]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[asignacion_tarea] ADD  CONSTRAINT [DF_5d7747d01053ebad6afc556109d]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[cirugia] ADD  CONSTRAINT [DF_432ca546e157ab68796598b4891]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[cita] ADD  CONSTRAINT [DF_7befb13dfe00ede527a31c3893c]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[complejidad] ADD  CONSTRAINT [DF_713fafed66da42060af396ef77c]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[complicaciones] ADD  CONSTRAINT [DF_01018c79a6ffba578c5b1fa4ccc]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[diagnostico] ADD  CONSTRAINT [DF_a1c81c24f6829dd708e20dd3c69]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[direccion] ADD  CONSTRAINT [DF_ba9f4c9cf37333b76800aa02ebc]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[donacion] ADD  CONSTRAINT [DF_266daa01c02845a67da794db236]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[efectos_secundarios] ADD  CONSTRAINT [DF_420ec0d35d6118d9b231f382742]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[empleado] ADD  CONSTRAINT [DF_2a8a55a8598b28fd5086012ccd8]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[enfermedad] ADD  CONSTRAINT [DF_240c6bc3dd59d6a43cb468e9dfb]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[enfermedad_xsintomas] ADD  CONSTRAINT [DF_5582c051623c722fd17c286afe3]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[enfermedad_xtartamiento] ADD  CONSTRAINT [DF_8850cf83f6bceb18d406b9b1f6a]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[especie] ADD  CONSTRAINT [DF_d40804601fb7250c970856ee361]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[estado] ADD  CONSTRAINT [DF_5c6c4215cd3227c40d1ae4ae5d1]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[estado_civil] ADD  CONSTRAINT [DF_cc8c5cf3c08fa80215ca1bf010d]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[estado_emergencia] ADD  CONSTRAINT [DF_6bcee19ab0633c4dcb03910f633]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[estado_lugar] ADD  CONSTRAINT [DF_610403c8794b6344005ddb78680]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[estado_salud] ADD  CONSTRAINT [DF_73bf2153afeb5780a81e59069f6]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[historial_alimentacion] ADD  CONSTRAINT [DF_f64cd5f7cab62b76721755d2b96]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[historial_mantenimiento] ADD  CONSTRAINT [DF_9c7050c00a10f4624c08cb81220]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[historial_medicamento] ADD  CONSTRAINT [DF_c9bf6996a372fab46158886e9b7]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[historial_medico] ADD  CONSTRAINT [DF_d1ab68b480305c1f062ef15d3f4]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[historial_vacunas] ADD  CONSTRAINT [DF_f6c89c6649ed555a69a7c2dd851]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[indentificador] ADD  CONSTRAINT [DF_0319446668e60ad24389a30ea5f]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[mantenimiento] ADD  CONSTRAINT [DF_8f534c251bc98228d297ad47043]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[marca] ADD  CONSTRAINT [DF_b002b50372f36418e8fcb1110d6]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[medicamento] ADD  CONSTRAINT [DF_65d5f019384e848ec4cc5cc96c7]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[medicamento_xespecie] ADD  CONSTRAINT [DF_e414885b0166d7abd02a447fa13]  DEFAULT ((0)) FOR [esPrincipal]
GO
ALTER TABLE [dbo].[medicamento_xespecie] ADD  CONSTRAINT [DF_ad41de4095472cfff1ca0aa79be]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[mision] ADD  CONSTRAINT [DF_f87296445838b15cb71f2049fc5]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[modelo] ADD  CONSTRAINT [DF_f0699846e06c48941c5f223f77d]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[nivel_urgencia] ADD  CONSTRAINT [DF_09999be293607887548f7bfba09]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[origen] ADD  CONSTRAINT [DF_a7454f57c5b9cf40e26a15e193b]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[persona] ADD  CONSTRAINT [DF_638d6fc1ca4cf03e78bf0ad8fbb]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[persona_xtelefono] ADD  CONSTRAINT [DF_e56eda350bcf8212d241427114b]  DEFAULT ((0)) FOR [esPrincipal]
GO
ALTER TABLE [dbo].[persona_xtelefono] ADD  CONSTRAINT [DF_f200365f9922cf7be8b658b1106]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[poliza_seguro] ADD  CONSTRAINT [DF_1a68c371b813180e31bc187ea7a]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[post_adopcion] ADD  CONSTRAINT [DF_a1621d360cb0d6e0485d068d580]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[proceso_adopcion] ADD  CONSTRAINT [DF_b3910df6de7dda155675a356474]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[producto] ADD  CONSTRAINT [DF_af7677d91d3a49cf26ba88580f4]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[producto_xalmacen] ADD  CONSTRAINT [DF_51f208af89e579ec4917ea9a489]  DEFAULT ((0)) FOR [existencia]
GO
ALTER TABLE [dbo].[producto_xalmacen] ADD  CONSTRAINT [DF_f05b7013e7188dcd2eace517193]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[proveedor] ADD  CONSTRAINT [DF_60d2052e9691ad5a93d6317acc9]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[proveedor_xproducto] ADD  CONSTRAINT [DF_62cf0c54e7fc3df78bee4412522]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[rasgos_fisicos] ADD  CONSTRAINT [DF_3424a59f23503071c0ca932f7c8]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[rasgos_físicos] ADD  CONSTRAINT [DF_c855864485c316361172b17cf7c]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[sintoma] ADD  CONSTRAINT [DF_7891d740f3606191994f68fc18f]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[solicitante] ADD  CONSTRAINT [DF_de4580c39f14c17965c51acb7da]  DEFAULT ((0)) FOR [ingresosMensuales]
GO
ALTER TABLE [dbo].[solicitante] ADD  CONSTRAINT [DF_94e14946eaf130abcbaa276cc0b]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[solicitud] ADD  CONSTRAINT [DF_42af5a1b0ca429870e1dca3da1d]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[solicitud_r] ADD  CONSTRAINT [DF_bff5bdf754e3a0a9825b9ab3117]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[sucursal] ADD  CONSTRAINT [DF_c5ca96deb80147d670a800ddf8d]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tarea] ADD  CONSTRAINT [DF_9f1592899f2a1807bc8549bb3ae]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[telefono] ADD  CONSTRAINT [DF_94bc8d2a40302851f15d418ed5b]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_alimento] ADD  CONSTRAINT [DF_2819a7d0e2bb71d86ba3a6f933f]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_combustible] ADD  CONSTRAINT [DF_ffd7c95dc798ec8f496b2b57b69]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_donacion] ADD  CONSTRAINT [DF_4221cf29065cb965a1ad3c5a104]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_empleado] ADD  CONSTRAINT [DF_78a975baf67b91524d10f3ff08a]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_empresa] ADD  CONSTRAINT [DF_44df055a2c40b6cfbb1410fe530]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_enfermedad] ADD  CONSTRAINT [DF_aac535994e579f2df09024abacc]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_mantenimiento] ADD  CONSTRAINT [DF_970e08ddab8c31009913371b080]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_medicamento] ADD  CONSTRAINT [DF_f429aa4c7aa1c7b92b122e2a323]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_persona] ADD  CONSTRAINT [DF_81bf57f52ca719f2690c8129872]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_piel] ADD  CONSTRAINT [DF_d6a25b46ef588bacc67dd0c5e10]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_producto] ADD  CONSTRAINT [DF_c2ee6ccfbf7fc4df4113a746da4]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_recurso] ADD  CONSTRAINT [DF_1e087564e4eec8b2bdda80ed81a]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_sintoma] ADD  CONSTRAINT [DF_e97a56d6f722db7f3605ad55e1f]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_tarea] ADD  CONSTRAINT [DF_61e9d45f23a12759729a7e95318]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_telefono] ADD  CONSTRAINT [DF_d701e77c44b5c0011c80da29951]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_tratamiento] ADD  CONSTRAINT [DF_8877500353cd4949441470569cd]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_usuario] ADD  CONSTRAINT [DF_6ba6137556b6b14d491b24cdd7f]  DEFAULT ((16)) FOR [fechaModificacion]
GO
ALTER TABLE [dbo].[tipo_usuario] ADD  CONSTRAINT [DF_62b58f79eb9797fbc03e2ca7345]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tipo_vehiculo] ADD  CONSTRAINT [DF_14d4ce38c87f22acc4998a76e76]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[tratamiento] ADD  CONSTRAINT [DF_0eec253e0b456df59383bf91510]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[usuario] ADD  CONSTRAINT [DF_df0630b069ecca09c829b537002]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[vacuna] ADD  CONSTRAINT [DF_5e13ba90ccf699d6ecddd677e7e]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[vehiculo] ADD  CONSTRAINT [DF_e0798f1896388c65c0600850b67]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[via_administracion] ADD  CONSTRAINT [DF_020f19a5b67b22af66a0ea86059]  DEFAULT ((1)) FOR [status]
GO
ALTER TABLE [dbo].[alimento]  WITH CHECK ADD  CONSTRAINT [FK_6309a27b1602d94e2e3ebdfccc5] FOREIGN KEY([tipoAlimentoTipoAlimentoId])
REFERENCES [dbo].[tipo_alimento] ([tipoAlimentoId])
GO
ALTER TABLE [dbo].[alimento] CHECK CONSTRAINT [FK_6309a27b1602d94e2e3ebdfccc5]
GO
ALTER TABLE [dbo].[almacen]  WITH CHECK ADD  CONSTRAINT [FK_04e17f47fbda4fb763c522fa453] FOREIGN KEY([surcusalSucursalId])
REFERENCES [dbo].[sucursal] ([sucursalId])
GO
ALTER TABLE [dbo].[almacen] CHECK CONSTRAINT [FK_04e17f47fbda4fb763c522fa453]
GO
ALTER TABLE [dbo].[animal]  WITH CHECK ADD  CONSTRAINT [FK_2dcde73daa53981172532269abb] FOREIGN KEY([especieEspecieId])
REFERENCES [dbo].[especie] ([especieId])
GO
ALTER TABLE [dbo].[animal] CHECK CONSTRAINT [FK_2dcde73daa53981172532269abb]
GO
ALTER TABLE [dbo].[animal]  WITH CHECK ADD  CONSTRAINT [FK_b6e660c6973462b087f71e55656] FOREIGN KEY([rasgosFisicosRasgosFísicosId])
REFERENCES [dbo].[rasgos_fisicos] ([rasgosFísicosId])
GO
ALTER TABLE [dbo].[animal] CHECK CONSTRAINT [FK_b6e660c6973462b087f71e55656]
GO
ALTER TABLE [dbo].[asignacion_recursos]  WITH CHECK ADD  CONSTRAINT [FK_0fb45f5646db952116dcf045dad] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[asignacion_recursos] CHECK CONSTRAINT [FK_0fb45f5646db952116dcf045dad]
GO
ALTER TABLE [dbo].[asignacion_recursos]  WITH CHECK ADD  CONSTRAINT [FK_29ec80f3672991eb1f5829663d3] FOREIGN KEY([tipoRecursoTipoRecursoId])
REFERENCES [dbo].[tipo_recurso] ([tipoRecursoId])
GO
ALTER TABLE [dbo].[asignacion_recursos] CHECK CONSTRAINT [FK_29ec80f3672991eb1f5829663d3]
GO
ALTER TABLE [dbo].[asignacion_recursos]  WITH CHECK ADD  CONSTRAINT [FK_3c94a92259aaee745fd0a131faf] FOREIGN KEY([productoProductoId])
REFERENCES [dbo].[producto] ([productoId])
GO
ALTER TABLE [dbo].[asignacion_recursos] CHECK CONSTRAINT [FK_3c94a92259aaee745fd0a131faf]
GO
ALTER TABLE [dbo].[asignacion_recursos]  WITH CHECK ADD  CONSTRAINT [FK_c082cba00cc9e741e59cfd74d81] FOREIGN KEY([tareaAsignacionTareaId])
REFERENCES [dbo].[asignacion_tarea] ([asignacionTareaId])
GO
ALTER TABLE [dbo].[asignacion_recursos] CHECK CONSTRAINT [FK_c082cba00cc9e741e59cfd74d81]
GO
ALTER TABLE [dbo].[asignacion_tarea]  WITH CHECK ADD  CONSTRAINT [FK_1005eac043e48c0f6e3857f2e85] FOREIGN KEY([tareaTareaId])
REFERENCES [dbo].[tarea] ([tareaId])
GO
ALTER TABLE [dbo].[asignacion_tarea] CHECK CONSTRAINT [FK_1005eac043e48c0f6e3857f2e85]
GO
ALTER TABLE [dbo].[asignacion_tarea]  WITH CHECK ADD  CONSTRAINT [FK_29d797a45d0828a923962355fe3] FOREIGN KEY([empleadoEmpleadoId])
REFERENCES [dbo].[empleado] ([EmpleadoId])
GO
ALTER TABLE [dbo].[asignacion_tarea] CHECK CONSTRAINT [FK_29d797a45d0828a923962355fe3]
GO
ALTER TABLE [dbo].[asignacion_tarea]  WITH CHECK ADD  CONSTRAINT [FK_3ed2f36f939de108de46535d167] FOREIGN KEY([tipoRecursoTipoRecursoId])
REFERENCES [dbo].[tipo_recurso] ([tipoRecursoId])
GO
ALTER TABLE [dbo].[asignacion_tarea] CHECK CONSTRAINT [FK_3ed2f36f939de108de46535d167]
GO
ALTER TABLE [dbo].[asignacion_tarea]  WITH CHECK ADD  CONSTRAINT [FK_3eedf3b52e62e64fe9facce744e] FOREIGN KEY([ubicacionDireccionId])
REFERENCES [dbo].[direccion] ([direccionId])
GO
ALTER TABLE [dbo].[asignacion_tarea] CHECK CONSTRAINT [FK_3eedf3b52e62e64fe9facce744e]
GO
ALTER TABLE [dbo].[asignacion_tarea]  WITH CHECK ADD  CONSTRAINT [FK_8d70115fbec64b6f27b34358fc7] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[asignacion_tarea] CHECK CONSTRAINT [FK_8d70115fbec64b6f27b34358fc7]
GO
ALTER TABLE [dbo].[asignacion_tarea]  WITH CHECK ADD  CONSTRAINT [FK_dd5be5782f9bc3f37634f7ec211] FOREIGN KEY([nivelUrgenciaNivelUrgenciaId])
REFERENCES [dbo].[nivel_urgencia] ([nivelUrgenciaId])
GO
ALTER TABLE [dbo].[asignacion_tarea] CHECK CONSTRAINT [FK_dd5be5782f9bc3f37634f7ec211]
GO
ALTER TABLE [dbo].[cirugia]  WITH CHECK ADD  CONSTRAINT [FK_47c551056f1953c8fae0d8fe73a] FOREIGN KEY([tratamientoTratamientoId])
REFERENCES [dbo].[tratamiento] ([tratamientoId])
GO
ALTER TABLE [dbo].[cirugia] CHECK CONSTRAINT [FK_47c551056f1953c8fae0d8fe73a]
GO
ALTER TABLE [dbo].[cirugia]  WITH CHECK ADD  CONSTRAINT [FK_769801e407067d58c7ee760a3e1] FOREIGN KEY([animalAnimalId])
REFERENCES [dbo].[animal] ([animalId])
GO
ALTER TABLE [dbo].[cirugia] CHECK CONSTRAINT [FK_769801e407067d58c7ee760a3e1]
GO
ALTER TABLE [dbo].[cirugia]  WITH CHECK ADD  CONSTRAINT [FK_c2ee5b1353045c6f5608fcc844e] FOREIGN KEY([personaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[cirugia] CHECK CONSTRAINT [FK_c2ee5b1353045c6f5608fcc844e]
GO
ALTER TABLE [dbo].[cita]  WITH CHECK ADD  CONSTRAINT [FK_30885ac818319e7464ec08cf161] FOREIGN KEY([personaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[cita] CHECK CONSTRAINT [FK_30885ac818319e7464ec08cf161]
GO
ALTER TABLE [dbo].[cita]  WITH CHECK ADD  CONSTRAINT [FK_368aa5deef075046261351dcd2a] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[cita] CHECK CONSTRAINT [FK_368aa5deef075046261351dcd2a]
GO
ALTER TABLE [dbo].[diagnostico]  WITH CHECK ADD  CONSTRAINT [FK_b8eee13173897e5fd821aec1f14] FOREIGN KEY([historialHistorialMedicoId])
REFERENCES [dbo].[historial_medico] ([historialMedicoId])
GO
ALTER TABLE [dbo].[diagnostico] CHECK CONSTRAINT [FK_b8eee13173897e5fd821aec1f14]
GO
ALTER TABLE [dbo].[diagnostico]  WITH CHECK ADD  CONSTRAINT [FK_cfbef8ffb995f6074ea010aeb8b] FOREIGN KEY([enfermedadEnfermedadId])
REFERENCES [dbo].[enfermedad] ([EnfermedadId])
GO
ALTER TABLE [dbo].[diagnostico] CHECK CONSTRAINT [FK_cfbef8ffb995f6074ea010aeb8b]
GO
ALTER TABLE [dbo].[donacion]  WITH CHECK ADD  CONSTRAINT [FK_33fa1ddf10ea3f6af02783d36e9] FOREIGN KEY([tipoDonacionTipoDonacionId])
REFERENCES [dbo].[tipo_donacion] ([tipoDonacionId])
GO
ALTER TABLE [dbo].[donacion] CHECK CONSTRAINT [FK_33fa1ddf10ea3f6af02783d36e9]
GO
ALTER TABLE [dbo].[donacion]  WITH CHECK ADD  CONSTRAINT [FK_8e49be35bfd75ca09a979ac83ba] FOREIGN KEY([donadorPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[donacion] CHECK CONSTRAINT [FK_8e49be35bfd75ca09a979ac83ba]
GO
ALTER TABLE [dbo].[efectos_secundarios]  WITH CHECK ADD  CONSTRAINT [FK_4fadab12695d419f292f45356a1] FOREIGN KEY([sintomaSintomaId])
REFERENCES [dbo].[sintoma] ([sintomaId])
GO
ALTER TABLE [dbo].[efectos_secundarios] CHECK CONSTRAINT [FK_4fadab12695d419f292f45356a1]
GO
ALTER TABLE [dbo].[empleado]  WITH CHECK ADD  CONSTRAINT [FK_0a6d670dc41608c2beddb602be6] FOREIGN KEY([surcusalSucursalId])
REFERENCES [dbo].[sucursal] ([sucursalId])
GO
ALTER TABLE [dbo].[empleado] CHECK CONSTRAINT [FK_0a6d670dc41608c2beddb602be6]
GO
ALTER TABLE [dbo].[empleado]  WITH CHECK ADD  CONSTRAINT [FK_2635ba1aac4d7a01eac1693770b] FOREIGN KEY([tipoEmpleadoTipoEmpleadoId])
REFERENCES [dbo].[tipo_empleado] ([tipoEmpleadoId])
GO
ALTER TABLE [dbo].[empleado] CHECK CONSTRAINT [FK_2635ba1aac4d7a01eac1693770b]
GO
ALTER TABLE [dbo].[empleado]  WITH CHECK ADD  CONSTRAINT [FK_924064d14f190f05a1c2d4c989d] FOREIGN KEY([personaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[empleado] CHECK CONSTRAINT [FK_924064d14f190f05a1c2d4c989d]
GO
ALTER TABLE [dbo].[enfermedad]  WITH CHECK ADD  CONSTRAINT [FK_2409161627292a3488686509942] FOREIGN KEY([tipoEnfermedadTipoEnfermedadId])
REFERENCES [dbo].[tipo_enfermedad] ([tipoEnfermedadId])
GO
ALTER TABLE [dbo].[enfermedad] CHECK CONSTRAINT [FK_2409161627292a3488686509942]
GO
ALTER TABLE [dbo].[enfermedad_xsintomas]  WITH CHECK ADD  CONSTRAINT [FK_30c09cec171018834dbc240f92d] FOREIGN KEY([sintomaSintomaId])
REFERENCES [dbo].[sintoma] ([sintomaId])
GO
ALTER TABLE [dbo].[enfermedad_xsintomas] CHECK CONSTRAINT [FK_30c09cec171018834dbc240f92d]
GO
ALTER TABLE [dbo].[enfermedad_xsintomas]  WITH CHECK ADD  CONSTRAINT [FK_cb17aacdf456f4e17333f98f38a] FOREIGN KEY([enfermedadEnfermedadId])
REFERENCES [dbo].[enfermedad] ([EnfermedadId])
GO
ALTER TABLE [dbo].[enfermedad_xsintomas] CHECK CONSTRAINT [FK_cb17aacdf456f4e17333f98f38a]
GO
ALTER TABLE [dbo].[enfermedad_xtartamiento]  WITH CHECK ADD  CONSTRAINT [FK_441dc2313562a3f45cd001cd854] FOREIGN KEY([enfermedadEnfermedadId])
REFERENCES [dbo].[enfermedad] ([EnfermedadId])
GO
ALTER TABLE [dbo].[enfermedad_xtartamiento] CHECK CONSTRAINT [FK_441dc2313562a3f45cd001cd854]
GO
ALTER TABLE [dbo].[enfermedad_xtartamiento]  WITH CHECK ADD  CONSTRAINT [FK_46d9b165a241dece2fe8f9461a8] FOREIGN KEY([tratamientoTratamientoId])
REFERENCES [dbo].[tratamiento] ([tratamientoId])
GO
ALTER TABLE [dbo].[enfermedad_xtartamiento] CHECK CONSTRAINT [FK_46d9b165a241dece2fe8f9461a8]
GO
ALTER TABLE [dbo].[historial_alimentacion]  WITH CHECK ADD  CONSTRAINT [FK_3b7a275d3d2a19dbbf77562845a] FOREIGN KEY([veterinarioEmpleadoId])
REFERENCES [dbo].[empleado] ([EmpleadoId])
GO
ALTER TABLE [dbo].[historial_alimentacion] CHECK CONSTRAINT [FK_3b7a275d3d2a19dbbf77562845a]
GO
ALTER TABLE [dbo].[historial_alimentacion]  WITH CHECK ADD  CONSTRAINT [FK_56c604778b682743218f5de523f] FOREIGN KEY([animalAnimalId])
REFERENCES [dbo].[animal] ([animalId])
GO
ALTER TABLE [dbo].[historial_alimentacion] CHECK CONSTRAINT [FK_56c604778b682743218f5de523f]
GO
ALTER TABLE [dbo].[historial_medico]  WITH CHECK ADD  CONSTRAINT [FK_1fa8714efa28c446db58c7bb94d] FOREIGN KEY([veterinarioEmpleadoId])
REFERENCES [dbo].[empleado] ([EmpleadoId])
GO
ALTER TABLE [dbo].[historial_medico] CHECK CONSTRAINT [FK_1fa8714efa28c446db58c7bb94d]
GO
ALTER TABLE [dbo].[historial_medico]  WITH CHECK ADD  CONSTRAINT [FK_231a838cf4ea58ed21727f65e46] FOREIGN KEY([animalAnimalId])
REFERENCES [dbo].[animal] ([animalId])
GO
ALTER TABLE [dbo].[historial_medico] CHECK CONSTRAINT [FK_231a838cf4ea58ed21727f65e46]
GO
ALTER TABLE [dbo].[historial_medico]  WITH CHECK ADD  CONSTRAINT [FK_5157ff9efb890c714031c9a0e6f] FOREIGN KEY([polizaSeguroPolizaSeguroId])
REFERENCES [dbo].[poliza_seguro] ([polizaSeguroId])
GO
ALTER TABLE [dbo].[historial_medico] CHECK CONSTRAINT [FK_5157ff9efb890c714031c9a0e6f]
GO
ALTER TABLE [dbo].[historial_medico]  WITH CHECK ADD  CONSTRAINT [FK_e9f39ee7b0e68dfc24da66ce6f2] FOREIGN KEY([estadoSaludEstadoSaludId])
REFERENCES [dbo].[estado_salud] ([estadoSaludId])
GO
ALTER TABLE [dbo].[historial_medico] CHECK CONSTRAINT [FK_e9f39ee7b0e68dfc24da66ce6f2]
GO
ALTER TABLE [dbo].[historial_vacunas]  WITH CHECK ADD  CONSTRAINT [FK_1b89e2e8c4defe4d149a83d120c] FOREIGN KEY([personaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[historial_vacunas] CHECK CONSTRAINT [FK_1b89e2e8c4defe4d149a83d120c]
GO
ALTER TABLE [dbo].[historial_vacunas]  WITH CHECK ADD  CONSTRAINT [FK_62b6bfffd5516d89ead6b4ffd8a] FOREIGN KEY([historialHistorialMedicoId])
REFERENCES [dbo].[historial_medico] ([historialMedicoId])
GO
ALTER TABLE [dbo].[historial_vacunas] CHECK CONSTRAINT [FK_62b6bfffd5516d89ead6b4ffd8a]
GO
ALTER TABLE [dbo].[historial_vacunas]  WITH CHECK ADD  CONSTRAINT [FK_8b00a4987764029a8c0177b621e] FOREIGN KEY([vacunaVacunaId])
REFERENCES [dbo].[vacuna] ([vacunaId])
GO
ALTER TABLE [dbo].[historial_vacunas] CHECK CONSTRAINT [FK_8b00a4987764029a8c0177b621e]
GO
ALTER TABLE [dbo].[log_acciones]  WITH CHECK ADD  CONSTRAINT [FK_0d7a499d0df1d7cc3e5d6e459e5] FOREIGN KEY([surcusalSucursalId])
REFERENCES [dbo].[sucursal] ([sucursalId])
GO
ALTER TABLE [dbo].[log_acciones] CHECK CONSTRAINT [FK_0d7a499d0df1d7cc3e5d6e459e5]
GO
ALTER TABLE [dbo].[log_acciones]  WITH CHECK ADD  CONSTRAINT [FK_df7cb38b9de10056bc4d241e4ad] FOREIGN KEY([usuarioUsuarioId])
REFERENCES [dbo].[usuario] ([usuarioId])
GO
ALTER TABLE [dbo].[log_acciones] CHECK CONSTRAINT [FK_df7cb38b9de10056bc4d241e4ad]
GO
ALTER TABLE [dbo].[mantenimiento]  WITH CHECK ADD  CONSTRAINT [FK_e7e71e0e37fa45f9b44732f987c] FOREIGN KEY([tipoMantenimientoTipoMantenimientoId])
REFERENCES [dbo].[tipo_mantenimiento] ([tipoMantenimientoId])
GO
ALTER TABLE [dbo].[mantenimiento] CHECK CONSTRAINT [FK_e7e71e0e37fa45f9b44732f987c]
GO
ALTER TABLE [dbo].[medicamento]  WITH CHECK ADD  CONSTRAINT [FK_3290ed840e69af2bf62de8899e6] FOREIGN KEY([tipoMedicamentoTipoMedicamentoId])
REFERENCES [dbo].[tipo_medicamento] ([tipoMedicamentoId])
GO
ALTER TABLE [dbo].[medicamento] CHECK CONSTRAINT [FK_3290ed840e69af2bf62de8899e6]
GO
ALTER TABLE [dbo].[medicamento]  WITH CHECK ADD  CONSTRAINT [FK_713b9592f07b33eb886bce990e9] FOREIGN KEY([productoProductoId])
REFERENCES [dbo].[producto] ([productoId])
GO
ALTER TABLE [dbo].[medicamento] CHECK CONSTRAINT [FK_713b9592f07b33eb886bce990e9]
GO
ALTER TABLE [dbo].[medicamento]  WITH CHECK ADD  CONSTRAINT [FK_da2edd28fc699a9ef066e51fd52] FOREIGN KEY([viaAdministracionViaAdministracionId])
REFERENCES [dbo].[via_administracion] ([viaAdministracionId])
GO
ALTER TABLE [dbo].[medicamento] CHECK CONSTRAINT [FK_da2edd28fc699a9ef066e51fd52]
GO
ALTER TABLE [dbo].[medicamento_xespecie]  WITH CHECK ADD  CONSTRAINT [FK_2e13b08be7ce5aee9f13502464d] FOREIGN KEY([especieEspecieId])
REFERENCES [dbo].[especie] ([especieId])
GO
ALTER TABLE [dbo].[medicamento_xespecie] CHECK CONSTRAINT [FK_2e13b08be7ce5aee9f13502464d]
GO
ALTER TABLE [dbo].[medicamento_xespecie]  WITH CHECK ADD  CONSTRAINT [FK_3da39c88bcef2979630270320bf] FOREIGN KEY([medicamentoMedicamentoId])
REFERENCES [dbo].[medicamento] ([medicamentoId])
GO
ALTER TABLE [dbo].[medicamento_xespecie] CHECK CONSTRAINT [FK_3da39c88bcef2979630270320bf]
GO
ALTER TABLE [dbo].[mision]  WITH CHECK ADD  CONSTRAINT [FK_0a10c1ff282805bd1afe374c2cd] FOREIGN KEY([solicitudSolicitudId])
REFERENCES [dbo].[solicitud_r] ([SolicitudId])
GO
ALTER TABLE [dbo].[mision] CHECK CONSTRAINT [FK_0a10c1ff282805bd1afe374c2cd]
GO
ALTER TABLE [dbo].[mision]  WITH CHECK ADD  CONSTRAINT [FK_4f5b5cc02de9f02db3614f3a0c2] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[mision] CHECK CONSTRAINT [FK_4f5b5cc02de9f02db3614f3a0c2]
GO
ALTER TABLE [dbo].[modelo]  WITH CHECK ADD  CONSTRAINT [FK_108238e4fab814f34dabd1a84ea] FOREIGN KEY([marcaMarcaId])
REFERENCES [dbo].[marca] ([marcaId])
GO
ALTER TABLE [dbo].[modelo] CHECK CONSTRAINT [FK_108238e4fab814f34dabd1a84ea]
GO
ALTER TABLE [dbo].[persona]  WITH CHECK ADD  CONSTRAINT [FK_1ab2a05bd30ca0a219374e96b3e] FOREIGN KEY([estadoCivilEstadoCivilId])
REFERENCES [dbo].[estado_civil] ([estadoCivilId])
GO
ALTER TABLE [dbo].[persona] CHECK CONSTRAINT [FK_1ab2a05bd30ca0a219374e96b3e]
GO
ALTER TABLE [dbo].[persona]  WITH CHECK ADD  CONSTRAINT [FK_7ee2ea2d9be28fc7e513512f116] FOREIGN KEY([tipoEmpresaTipoEmpresaId])
REFERENCES [dbo].[tipo_empresa] ([tipoEmpresaId])
GO
ALTER TABLE [dbo].[persona] CHECK CONSTRAINT [FK_7ee2ea2d9be28fc7e513512f116]
GO
ALTER TABLE [dbo].[persona]  WITH CHECK ADD  CONSTRAINT [FK_acd6610e98eee4ae16d80bb3a45] FOREIGN KEY([tipoPersonaTipoPersonaId])
REFERENCES [dbo].[tipo_persona] ([tipoPersonaId])
GO
ALTER TABLE [dbo].[persona] CHECK CONSTRAINT [FK_acd6610e98eee4ae16d80bb3a45]
GO
ALTER TABLE [dbo].[persona]  WITH CHECK ADD  CONSTRAINT [FK_f6318eb26fefec4ccff124501a4] FOREIGN KEY([direccionDireccionId])
REFERENCES [dbo].[direccion] ([direccionId])
GO
ALTER TABLE [dbo].[persona] CHECK CONSTRAINT [FK_f6318eb26fefec4ccff124501a4]
GO
ALTER TABLE [dbo].[persona_xtelefono]  WITH CHECK ADD  CONSTRAINT [FK_0d8e5299a34aa1a1a450442733c] FOREIGN KEY([personaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[persona_xtelefono] CHECK CONSTRAINT [FK_0d8e5299a34aa1a1a450442733c]
GO
ALTER TABLE [dbo].[persona_xtelefono]  WITH CHECK ADD  CONSTRAINT [FK_3209a0ea7c2f4992e8432be8446] FOREIGN KEY([telefonoTelefonoId])
REFERENCES [dbo].[telefono] ([telefonoId])
GO
ALTER TABLE [dbo].[persona_xtelefono] CHECK CONSTRAINT [FK_3209a0ea7c2f4992e8432be8446]
GO
ALTER TABLE [dbo].[poliza_seguro]  WITH CHECK ADD  CONSTRAINT [FK_88689feafdaea41afa344a26406] FOREIGN KEY([companiaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[poliza_seguro] CHECK CONSTRAINT [FK_88689feafdaea41afa344a26406]
GO
ALTER TABLE [dbo].[post_adopcion]  WITH CHECK ADD  CONSTRAINT [FK_a5097a3714cca5a5f479c8d6f9a] FOREIGN KEY([adopcionProcesoAdopcionId])
REFERENCES [dbo].[proceso_adopcion] ([procesoAdopcionId])
GO
ALTER TABLE [dbo].[post_adopcion] CHECK CONSTRAINT [FK_a5097a3714cca5a5f479c8d6f9a]
GO
ALTER TABLE [dbo].[post_adopcion]  WITH CHECK ADD  CONSTRAINT [FK_c70be2477d54cdbd4eb396f555e] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[post_adopcion] CHECK CONSTRAINT [FK_c70be2477d54cdbd4eb396f555e]
GO
ALTER TABLE [dbo].[proceso_adopcion]  WITH CHECK ADD  CONSTRAINT [FK_3dad3f0bbba5b57de95c01a0f6d] FOREIGN KEY([animalAnimalId])
REFERENCES [dbo].[animal] ([animalId])
GO
ALTER TABLE [dbo].[proceso_adopcion] CHECK CONSTRAINT [FK_3dad3f0bbba5b57de95c01a0f6d]
GO
ALTER TABLE [dbo].[proceso_adopcion]  WITH CHECK ADD  CONSTRAINT [FK_c8e06805b58fc4ee1ca64229c5b] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[proceso_adopcion] CHECK CONSTRAINT [FK_c8e06805b58fc4ee1ca64229c5b]
GO
ALTER TABLE [dbo].[proceso_adopcion]  WITH CHECK ADD  CONSTRAINT [FK_fab7d20cbf3667ffb5fb04e1985] FOREIGN KEY([solicitudSolicitudId])
REFERENCES [dbo].[solicitud] ([SolicitudId])
GO
ALTER TABLE [dbo].[proceso_adopcion] CHECK CONSTRAINT [FK_fab7d20cbf3667ffb5fb04e1985]
GO
ALTER TABLE [dbo].[producto]  WITH CHECK ADD  CONSTRAINT [FK_59e298a48e65de4a37fd97ae808] FOREIGN KEY([marcaMarcaId])
REFERENCES [dbo].[marca] ([marcaId])
GO
ALTER TABLE [dbo].[producto] CHECK CONSTRAINT [FK_59e298a48e65de4a37fd97ae808]
GO
ALTER TABLE [dbo].[producto]  WITH CHECK ADD  CONSTRAINT [FK_b677d27ff9409ef4ea28a453534] FOREIGN KEY([tipoProductoTipoProductoId])
REFERENCES [dbo].[tipo_producto] ([tipoProductoId])
GO
ALTER TABLE [dbo].[producto] CHECK CONSTRAINT [FK_b677d27ff9409ef4ea28a453534]
GO
ALTER TABLE [dbo].[producto_xalmacen]  WITH CHECK ADD  CONSTRAINT [FK_2d2318ce8ac8b00fa5359fc7750] FOREIGN KEY([almacenAlmacenId])
REFERENCES [dbo].[almacen] ([almacenId])
GO
ALTER TABLE [dbo].[producto_xalmacen] CHECK CONSTRAINT [FK_2d2318ce8ac8b00fa5359fc7750]
GO
ALTER TABLE [dbo].[producto_xalmacen]  WITH CHECK ADD  CONSTRAINT [FK_8a51bbabdf7fa552b0599a40cd8] FOREIGN KEY([productoProductoId])
REFERENCES [dbo].[producto] ([productoId])
GO
ALTER TABLE [dbo].[producto_xalmacen] CHECK CONSTRAINT [FK_8a51bbabdf7fa552b0599a40cd8]
GO
ALTER TABLE [dbo].[proveedor]  WITH CHECK ADD  CONSTRAINT [FK_c2adee161ca5ffc8d520646e6fc] FOREIGN KEY([personaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[proveedor] CHECK CONSTRAINT [FK_c2adee161ca5ffc8d520646e6fc]
GO
ALTER TABLE [dbo].[proveedor_xproducto]  WITH CHECK ADD  CONSTRAINT [FK_5c9780a20d7e74b4e228e82f9a2] FOREIGN KEY([proveedorProveedorId])
REFERENCES [dbo].[proveedor] ([proveedorId])
GO
ALTER TABLE [dbo].[proveedor_xproducto] CHECK CONSTRAINT [FK_5c9780a20d7e74b4e228e82f9a2]
GO
ALTER TABLE [dbo].[proveedor_xproducto]  WITH CHECK ADD  CONSTRAINT [FK_f3d2055193fba36c3b29d97d3b8] FOREIGN KEY([productoProductoId])
REFERENCES [dbo].[producto] ([productoId])
GO
ALTER TABLE [dbo].[proveedor_xproducto] CHECK CONSTRAINT [FK_f3d2055193fba36c3b29d97d3b8]
GO
ALTER TABLE [dbo].[rasgos_fisicos]  WITH CHECK ADD  CONSTRAINT [FK_21f962f72932ac002a4763b7884] FOREIGN KEY([tipoPielTipoPielId])
REFERENCES [dbo].[tipo_piel] ([tipoPielId])
GO
ALTER TABLE [dbo].[rasgos_fisicos] CHECK CONSTRAINT [FK_21f962f72932ac002a4763b7884]
GO
ALTER TABLE [dbo].[rasgos_físicos]  WITH CHECK ADD  CONSTRAINT [FK_c4f508d5c7d244f5dd8453488e6] FOREIGN KEY([tipoPielTipoPielId])
REFERENCES [dbo].[tipo_piel] ([tipoPielId])
GO
ALTER TABLE [dbo].[rasgos_físicos] CHECK CONSTRAINT [FK_c4f508d5c7d244f5dd8453488e6]
GO
ALTER TABLE [dbo].[sintoma]  WITH CHECK ADD  CONSTRAINT [FK_3a9a76f09779ea9d57ba257596d] FOREIGN KEY([tipoSintomaTipoSintomaId])
REFERENCES [dbo].[tipo_sintoma] ([tipoSintomaId])
GO
ALTER TABLE [dbo].[sintoma] CHECK CONSTRAINT [FK_3a9a76f09779ea9d57ba257596d]
GO
ALTER TABLE [dbo].[solicitante]  WITH CHECK ADD  CONSTRAINT [FK_03db2aa81d6ff9b224abe729e75] FOREIGN KEY([actividadEconomicaActividadEconomicaId])
REFERENCES [dbo].[actividad_economica] ([actividadEconomicaId])
GO
ALTER TABLE [dbo].[solicitante] CHECK CONSTRAINT [FK_03db2aa81d6ff9b224abe729e75]
GO
ALTER TABLE [dbo].[solicitante]  WITH CHECK ADD  CONSTRAINT [FK_1cffdf0abda36e7f983f65fd4b3] FOREIGN KEY([personaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[solicitante] CHECK CONSTRAINT [FK_1cffdf0abda36e7f983f65fd4b3]
GO
ALTER TABLE [dbo].[solicitud]  WITH CHECK ADD  CONSTRAINT [FK_58dd0b2dc9e74a4fd1d68ddd973] FOREIGN KEY([solicitanteSolicitanteId])
REFERENCES [dbo].[solicitante] ([SolicitanteId])
GO
ALTER TABLE [dbo].[solicitud] CHECK CONSTRAINT [FK_58dd0b2dc9e74a4fd1d68ddd973]
GO
ALTER TABLE [dbo].[solicitud]  WITH CHECK ADD  CONSTRAINT [FK_c4892c31bf114f332d11cc808ad] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[solicitud] CHECK CONSTRAINT [FK_c4892c31bf114f332d11cc808ad]
GO
ALTER TABLE [dbo].[solicitud]  WITH CHECK ADD  CONSTRAINT [FK_f42c2dc5924ac0f4f08b413934b] FOREIGN KEY([surcusalSucursalId])
REFERENCES [dbo].[sucursal] ([sucursalId])
GO
ALTER TABLE [dbo].[solicitud] CHECK CONSTRAINT [FK_f42c2dc5924ac0f4f08b413934b]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_16de1c66d94f0512af9ddf2f51e] FOREIGN KEY([estadoEmergenciaEstadoEmergenciaId])
REFERENCES [dbo].[estado_emergencia] ([estadoEmergenciaId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_16de1c66d94f0512af9ddf2f51e]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_77c698feb57d6d1dcb100d94fc5] FOREIGN KEY([estadoLugarEstadoLugarId])
REFERENCES [dbo].[estado_lugar] ([estadoLugarId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_77c698feb57d6d1dcb100d94fc5]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_8852f694bd126f58b6a606f5913] FOREIGN KEY([animalAnimalId])
REFERENCES [dbo].[animal] ([animalId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_8852f694bd126f58b6a606f5913]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_8cd6fc19a6e26c3dcbdedf902ed] FOREIGN KEY([estadoEstadoId])
REFERENCES [dbo].[estado] ([estadoId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_8cd6fc19a6e26c3dcbdedf902ed]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_aeb4e1d6a53467eb73bcaf7fcf7] FOREIGN KEY([remitentePersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_aeb4e1d6a53467eb73bcaf7fcf7]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_ce22381befbdb64e214ffdb88e1] FOREIGN KEY([surcusalSucursalId])
REFERENCES [dbo].[sucursal] ([sucursalId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_ce22381befbdb64e214ffdb88e1]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_f742b23d6a715d7b0e209a7a605] FOREIGN KEY([nivelUrgenciaNivelUrgenciaId])
REFERENCES [dbo].[nivel_urgencia] ([nivelUrgenciaId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_f742b23d6a715d7b0e209a7a605]
GO
ALTER TABLE [dbo].[solicitud_r]  WITH CHECK ADD  CONSTRAINT [FK_ff41c1d20f1634790dd1a926b44] FOREIGN KEY([ubicacionDireccionId])
REFERENCES [dbo].[direccion] ([direccionId])
GO
ALTER TABLE [dbo].[solicitud_r] CHECK CONSTRAINT [FK_ff41c1d20f1634790dd1a926b44]
GO
ALTER TABLE [dbo].[sucursal]  WITH CHECK ADD  CONSTRAINT [FK_6122828ddbe13e7e3f4d420130a] FOREIGN KEY([companiaPersonaId])
REFERENCES [dbo].[persona] ([personaId])
GO
ALTER TABLE [dbo].[sucursal] CHECK CONSTRAINT [FK_6122828ddbe13e7e3f4d420130a]
GO
ALTER TABLE [dbo].[tarea]  WITH CHECK ADD  CONSTRAINT [FK_55c3c7901ee64fba0431671c576] FOREIGN KEY([tipoTareaTipoTareaId])
REFERENCES [dbo].[tipo_tarea] ([tipoTareaId])
GO
ALTER TABLE [dbo].[tarea] CHECK CONSTRAINT [FK_55c3c7901ee64fba0431671c576]
GO
ALTER TABLE [dbo].[tarea]  WITH CHECK ADD  CONSTRAINT [FK_c3bddd9c90ac27b72de7fb48a6a] FOREIGN KEY([complejidadComplejidadId])
REFERENCES [dbo].[complejidad] ([complejidadId])
GO
ALTER TABLE [dbo].[tarea] CHECK CONSTRAINT [FK_c3bddd9c90ac27b72de7fb48a6a]
GO
ALTER TABLE [dbo].[telefono]  WITH CHECK ADD  CONSTRAINT [FK_711732fa52aea138fd37c2280f3] FOREIGN KEY([tipoTelefonoTipoTelefonoId])
REFERENCES [dbo].[tipo_telefono] ([tipoTelefonoId])
GO
ALTER TABLE [dbo].[telefono] CHECK CONSTRAINT [FK_711732fa52aea138fd37c2280f3]
GO
ALTER TABLE [dbo].[tratamiento]  WITH CHECK ADD  CONSTRAINT [FK_a37464ac4e337941c35939c02ec] FOREIGN KEY([tipoTratamientoTipoTratamientoId])
REFERENCES [dbo].[tipo_tratamiento] ([tipoTratamientoId])
GO
ALTER TABLE [dbo].[tratamiento] CHECK CONSTRAINT [FK_a37464ac4e337941c35939c02ec]
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_5f067a584fe86a4fc4608cb1d7b] FOREIGN KEY([surcusalSucursalId])
REFERENCES [dbo].[sucursal] ([sucursalId])
GO
ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_5f067a584fe86a4fc4608cb1d7b]
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_688891f503ca87ee88a263ed074] FOREIGN KEY([tipoUsuarioTipoUsuarioId])
REFERENCES [dbo].[tipo_usuario] ([tipoUsuarioId])
GO
ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_688891f503ca87ee88a263ed074]
GO
ALTER TABLE [dbo].[vacuna]  WITH CHECK ADD  CONSTRAINT [FK_47cd12e9cae2dd9b9d0826f0de6] FOREIGN KEY([medicamentoMedicamentoId])
REFERENCES [dbo].[medicamento] ([medicamentoId])
GO
ALTER TABLE [dbo].[vacuna] CHECK CONSTRAINT [FK_47cd12e9cae2dd9b9d0826f0de6]
GO
ALTER TABLE [dbo].[vehiculo]  WITH CHECK ADD  CONSTRAINT [FK_bc5598e0cb30fbeb21195aff228] FOREIGN KEY([tipoCombustibleTipoCombustibleId])
REFERENCES [dbo].[tipo_combustible] ([tipoCombustibleId])
GO
ALTER TABLE [dbo].[vehiculo] CHECK CONSTRAINT [FK_bc5598e0cb30fbeb21195aff228]
GO
ALTER TABLE [dbo].[vehiculo]  WITH CHECK ADD  CONSTRAINT [FK_f38cc1cb36e540f7a74a63f41d0] FOREIGN KEY([tipoVehiculoTipoVehiculoId])
REFERENCES [dbo].[tipo_vehiculo] ([tipoVehiculoId])
GO
ALTER TABLE [dbo].[vehiculo] CHECK CONSTRAINT [FK_f38cc1cb36e540f7a74a63f41d0]
GO
USE [master]
GO
ALTER DATABASE [CorazonPeludoDB] SET  READ_WRITE 
GO
