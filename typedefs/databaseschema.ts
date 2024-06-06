type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      modules: {
        Row: {
          code: string | null;
          credits: number | null;
          id: number;
          lettergrade: string | null;
          semester: number | null;
          title: string | null;
          type: string | null;
          user_id: string | null;
          year: number | null;
        };
        Insert: {
          code?: string | null;
          credits?: number | null;
          id?: number;
          lettergrade?: string | null;
          semester?: number | null;
          title?: string | null;
          type?: string | null;
          user_id?: string | null;
          year?: number | null;
        };
        Update: {
          code?: string | null;
          credits?: number | null;
          id?: number;
          lettergrade?: string | null;
          semester?: number | null;
          title?: string | null;
          type?: string | null;
          user_id?: string | null;
          year?: number | null;
        };
        Relationships: [];
      };
      stats: {
        Row: {
          failStreak: number | null;
          lastLogin: number | null;
          successStreak: number | null;
          user_email: string;
        };
        Insert: {
          failStreak?: number | null;
          lastLogin?: number | null;
          successStreak?: number | null;
          user_email: string;
        };
        Update: {
          failStreak?: number | null;
          lastLogin?: number | null;
          successStreak?: number | null;
          user_email?: string;
        };
        Relationships: [];
      };
      studysessions: {
        Row: {
          completed: boolean | null;
          created_at: string | null;
          duration: Json | null;
          id: number;
          user_id: string | null;
        };
        Insert: {
          completed?: boolean | null;
          created_at?: string | null;
          duration?: Json | null;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          completed?: boolean | null;
          created_at?: string | null;
          duration?: Json | null;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          email: string | null;
          id: number;
          pfpset: boolean | null;
          username: string | null;
        };
        Insert: {
          email?: string | null;
          id?: number;
          pfpset?: boolean | null;
          username?: string | null;
        };
        Update: {
          email?: string | null;
          id?: number;
          pfpset?: boolean | null;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
